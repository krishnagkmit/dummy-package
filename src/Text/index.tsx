import React from "react";
import { Typography } from "antd";

interface TextProps {
  text: string;
}

function Text({ text }: TextProps) {
  return (
    <Typography.Text className="text-xl text-red-600">{text}</Typography.Text>
  );
}

export default Text;
