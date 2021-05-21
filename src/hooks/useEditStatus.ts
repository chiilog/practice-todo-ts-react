import React from "react";

export const useEditStatus = () => {
  const onClickStatus = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    target.readOnly = !target.readOnly;
    target.setAttribute("aria-readonly", `"${target.readOnly}"`);
  };

  const onBlurStatus = (event: React.FocusEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    target.readOnly = true;
    target.setAttribute("aria-readonly", "true");
  };

  return { onClickStatus, onBlurStatus };
};
