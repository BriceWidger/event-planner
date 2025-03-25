import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import QRCode from "qrcode";
import "bootstrap-icons/font/bootstrap-icons.css";

const OrderNumber = ({ orderNumber, firstName, lastName, email }) => {
  const handlePrintTicket = async () => {
    const doc = new jsPDF("portrait", "px", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const qrCodeData = await QRCode.toDataURL(orderNumber);

    const containerWidth = 400;
    const containerX = (pageWidth - containerWidth) / 2;

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(0, 51, 102);
    doc.text("Your Ticket for the Annual Conference", containerX, 50);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    doc.text(`Order Number: ${orderNumber}`, containerX, 70);
    doc.text(`Ordered by: ${firstName} ${lastName} (${email})`, containerX, 85);
    doc.text(`Date: ${new Date().toLocaleString()}`, containerX, 100);

    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(1);
    doc.setFillColor(240, 240, 240);
    doc.rect(containerX, 120, containerWidth, 250, "FD");

    const qrCodeSize = 100;
    const qrCodeX = containerX + 20;
    const qrCodeY = 140;
    doc.addImage(qrCodeData, "PNG", qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);

    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(0, 51, 102);
    doc.text("Annual Conference", containerX + containerWidth / 2, qrCodeY + 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(`Order ID: #${orderNumber}`, containerX + containerWidth / 2, qrCodeY + 40, { align: "center" });

    doc.autoTable({
      startY: qrCodeY + 120,
      margin: { left: containerX + 20, right: containerX + 20 },
      head: [["Attendee", "Price", "Type"]],
      body: [[`${firstName} ${lastName}`, "$0.00", "General Admission"]],
      theme: "grid",
      styles: { halign: "center", fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255], fontStyle: "bold" },
      bodyStyles: { textColor: [0, 0, 0] },
    });

    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(
      "Thank you for choosing Event Planner!",
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 40,
      { align: "center" }
    );
    doc.text(
      "For more information, visit our website or contact support.",
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 25,
      { align: "center" }
    );

    doc.save("ticket-receipt.pdf");
  };

  return (
    <div className="ticket-container-main">
      <h1
        style={{
          fontWeight: 700,
          fontSize: 36,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Thank you
      </h1>
      <p
        style={{
          marginBottom: 20,
          fontWeight: 400,
          fontSize: 15,
          color: "#555",
        }}
      >
        Thank you for your response. Your response has been sent to the event
        organizer.
      </p>
      <div
        className="ticket-container"
        style={{
          border: "1px solid #ccc",
          borderTop: "3px solid #1f2834",
          padding: "40px 40px",
          marginBottom: "20px",
          "@media (max-width: 768px)": {
            padding: "20px",
          },
        }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <h5 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
              Order Number: {orderNumber}
            </h5>
            <p
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#555",
                margin: "0 0 10px",
              }}
            >
              {firstName} {lastName}
              <br />
              {email}
            </p>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="form-group">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#2d4086",
                  color: "#fff",
                  WebkitTransition: "all 0.2s ease",
                  fontSize: 13,
                  padding: "15px 28px",
                  borderRadius: 6,
                  display: "inline-block",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: "#334999",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  touchAction: "manipulation",
                  lineHeight: 1.428571429,
                  "@media (max-width: 768px)": {
                    padding: "10px 20px",
                  },
                }}
                onClick={handlePrintTicket}
              >
                <i className="bi bi-printer"></i> Print My Ticket(s) Now
              </button>
              <p
                className="help-block"
                style={{
                  fontSize: 12,
                  lineHeight: 1.3,
                  display: "block",
                  marginTop: 5,
                  marginBottom: 10,
                  color: "#737373",
                  fontWeight: 400,
                }}
              >
                We've also emailed these tickets to {email}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNumber;
