import React from "react";
function Header() {
  return (
    <>
      <div id="Header1">
        <div className="contoiner-fluid">
          <div className="row">
            <div className="Header-1">
              <p className="active">BU GÜN</p>
              <p>CƏDVƏL</p>
              <p>TEZLİKLƏ</p>
            </div>
          </div>
          <div className="row">
            <div className="Header-2">
              <p>
                Kinoteatrlar     
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </p>
              <p>
                Filmin dili     
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </p>
              <p>Movies in English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
