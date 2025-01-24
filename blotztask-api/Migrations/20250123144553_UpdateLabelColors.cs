using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class UpdateLabelColors : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 6,
                column: "Color",
                value: "#7758FF");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 7,
                column: "Color",
                value: "#FFDE23");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 8,
                column: "Color",
                value: "#FF4747");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 9,
                column: "Color",
                value: "#09F1D6");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 6,
                column: "Color",
                value: "#CDB2FF");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 7,
                column: "Color",
                value: "#FBFAC2");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 8,
                column: "Color",
                value: "#278291");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 9,
                column: "Color",
                value: "#1458C6");
        }
    }
}
