/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Card, Button, Upload, message, Typography, Breadcrumb } from "antd";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Text } = Typography;

export default function AddManagement() {
  const [webBannerFiles, setWebBannerFiles] = useState<any[]>([]);
  const [appBannerFiles, setAppBannerFiles] = useState<any[]>([]);

  const beforeUpload = (file: File) => {
    const isLt25M = file.size / 1024 / 1024 < 25;
    if (!isLt25M) {
      message.error("File must be smaller than 25MB!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handleRemove = (file: any, type: "web" | "app") => {
    if (type === "web") {
      setWebBannerFiles((prev) => prev.filter((f) => f.uid !== file.uid));
    } else {
      setAppBannerFiles((prev) => prev.filter((f) => f.uid !== file.uid));
    }
  };

  const handleAddBanner = (files: any[], type: string) => {
    if (files.length === 0) {
      message.warning(`Please select a file for ${type} Banner!`);
      return;
    }
    message.success(`${type} Banner added successfully!`);
  };

  const renderUploadArea = (
    files: any[],
    setFiles: React.Dispatch<React.SetStateAction<any[]>>,
    type: "web" | "app"
  ) => (
    <div style={{ marginTop: "24px" }}>
      <Text strong style={{ display: "block", marginBottom: "16px" }}>
        {type === "web" ? "Web Banner" : "App Banner"}
      </Text>

      <Upload.Dragger
        multiple
        accept="image/*"
        fileList={files}
        beforeUpload={beforeUpload}
        onChange={(info) => setFiles(info.fileList)}
        onRemove={(file) => handleRemove(file, type)}
        style={{
          padding: "32px",
          border: "2px dashed #d9d9d9",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <UploadOutlined
            style={{ fontSize: "32px", color: "#bfbfbf", marginBottom: "16px" }}
          />
          <Text style={{ color: "#595959", marginBottom: "8px" }}>
            Drop file or browse
          </Text>
          <Text type="secondary" style={{ marginBottom: "16px" }}>
            Format: jpeg, png, jpg & Max file size: 25 MB
          </Text>
          <Button
            type="primary"
            style={{ backgroundColor: "#389e0d", borderColor: "#389e0d" }}
          >
            Browse Files
          </Button>
        </div>
      </Upload.Dragger>

      {/* Image Previews */}
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        {files.map((file, index) => (
          <div key={file.uid} style={{ position: "relative" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={URL.createObjectURL(file.originFileObj)}
                alt={`Upload ${index + 1}`}
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
              <Button
                type="primary"
                shape="circle"
                size="small"
                icon={<CloseOutlined />}
                danger
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  minWidth: "20px",
                  width: "20px",
                  height: "20px",
                  fontSize: "10px",
                }}
                onClick={() => handleRemove(file, type)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Text type="secondary">Add Management</Text>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Title level={4} style={{ marginTop: 8, color: "#389e0d" }}>
          Add Management
        </Title>
      </div>

      <div className="grid grid-cols-1 md:grid-row-2 gap-6">
        <Card title="Add Banner For Website" className="shadow-md rounded-lg">
          {renderUploadArea(webBannerFiles, setWebBannerFiles, "web")}
          <div className="flex justify-center mt-6">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 h-10"
              disabled={webBannerFiles.length === 0}
              onClick={() => handleAddBanner(webBannerFiles, "Web")}
            >
              Add Banner
            </Button>
          </div>
        </Card>

        <Card title="Add Banner For Apps" className="shadow-md rounded-lg">
          {renderUploadArea(appBannerFiles, setAppBannerFiles, "app")}
          <div className="flex justify-center mt-6">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 h-10"
              disabled={appBannerFiles.length === 0}
              onClick={() => handleAddBanner(appBannerFiles, "App")}
            >
              Add Banner
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
