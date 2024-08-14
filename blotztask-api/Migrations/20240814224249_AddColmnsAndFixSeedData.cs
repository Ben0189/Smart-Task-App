﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class AddColmnsAndFixSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "TaskItems",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TaskItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsDone",
                table: "TaskItems",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "TaskItems",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "Description", "IsDone", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5409), "Description for Task 1", false, new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5411) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "Description", "IsDone", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5412), "Description for Task 2", true, new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5413) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "Description", "IsDone", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5414), "Description for Task 3", false, new DateTime(2024, 8, 14, 22, 42, 48, 865, DateTimeKind.Utc).AddTicks(5414) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "TaskItems");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "TaskItems");

            migrationBuilder.DropColumn(
                name: "IsDone",
                table: "TaskItems");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "TaskItems");
        }
    }
}
