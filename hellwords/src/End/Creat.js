import React from 'react'

export default function Creat() {
  return (
    <form>
    <input
      name={"inputEmail"}
      type={"mail"}
      placeholder={" Nhập tên của Project"}
    />
    <button type={"submit"} style={{ color: "black", background: "red" }}>
      Creat
    </button>
  </form>
  )
}
