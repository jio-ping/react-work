import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

function TextInput(props, ref) {
  const localRef = useRef(null);
  useEffect(() => {
    console.log(localRef); //{current:input}
  }, []);
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;
      localRef.current.value = "";
      localRef.current?.focus();
    },
  }));

  return <input type="text" ref={localRef} />;
}

export default forwardRef(TextInput);
