import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCloseOpenBtn = ({ formClose, setFormClose }) => {
  return (
    <button
      aria-label="Form Open/Close"
      className="exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-[#325178] shadow-lg border-2 border-[#325178]"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />}
    </button>
  )
}

export default FormCloseOpenBtn;
