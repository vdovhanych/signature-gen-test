// Function to generate the HTML email signature
function generateSignature() {
  // Get user input
  var name = document.getElementById("name").value;
  var position = document.getElementById("position").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var select = document.getElementById("company");
  var company = select.options[select.selectedIndex].value;

  // Create the HTML signature
  var signature = "";
  switch (company) {
    case "satoshilabs":
        signature += `
        <div style="width: 600px; height: 130px; background-color: white; border-radius: 10px; box-shadow: 0px 0px 10px #d9d9d9; padding-top: 10px; padding-bottom: 15px;">
        <div style="display: flex; flex-direction: column; padding: 15px;">
          <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
            <h1 style="margin: 0; font-size: 1em; font-weight: bold;">${name}</h1>
          </div>
          <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
            <p style="margin: 0; font-size: 0.7em; font-weight: lighter;">${position}</p>
          </div>
          <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
            <a href="mailto:${email}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${email}</a>
            <span style="margin: 0 10px;">|</span>
            <a href="tel:${phone}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${phone}</a>
          </div>
          <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px;">
            <a href="https://satoshilabs.com" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: underline;">satoshilabs.com</a>
          </div>
          <div style="margin: 0 10px; padding: 10px 0;">
            <hr style="margin: 0;">
          </div>
          <div style="display: flex; align-items: flex-end; margin-left: 10px; margin-bottom: 15px">
            <img src="https://s3.eu-central-1.amazonaws.com/testing-bucket.trezor.io/signature-logos/sl.png" style="margin-right: 10px; max-height: 35px;">
          </div>
        </div>
      </div>
      `;
        break;
        case "trezor":
          signature += `
          <div style="width: 600px; height: 130px; background-color: white; border-radius: 10px; box-shadow: 0px 0px 10px #d9d9d9; padding-top: 10px; padding-bottom: 15px;">
          <div style="display: flex; flex-direction: column; padding: 15px;">
            <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
              <h1 style="margin: 0; font-size: 1em; font-weight: bold;">${name}</h1>
            </div>
            <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
              <p style="margin: 0; font-size: 0.7em; font-weight: lighter;">${position}</p>
            </div>
            <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
            <a href="mailto:${email}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${email}</a>
            <span style="margin: 0 10px;">|</span>
            <a href="tel:${phone}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${phone}</a>
            </a>
            </div>
            <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px;">
            <a href="https://trezor.io" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: underline;">trezor.io</a>
            </div>
            <div style="margin: 0 10px; padding: 10px 0;">
              <hr style="margin: 0;">
            </div>
            <div style="display: flex; align-items: flex-end; margin-left: 10px; margin-bottom: 15px">
              <img src="https://s3.eu-central-1.amazonaws.com/testing-bucket.trezor.io/signature-logos/trezor.png" style="margin-right: 10px; max-height: 35px;">
            </div>
          </div>
        </div>
          `;
          break;
          case "invity":
            signature += `
            <div style="width: 600px; height: 130px; background-color: white; border-radius: 10px; box-shadow: 0px 0px 10px #d9d9d9; padding-top: 10px; padding-bottom: 15px;">
            <div style="display: flex; flex-direction: column; padding: 15px;">
              <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                <h1 style="margin: 0; font-size: 1em; font-weight: bold;">${name}</h1>
              </div>
              <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                <p style="margin: 0; font-size: 0.7em; font-weight: lighter;">${position}</p>
              </div>
              <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
              <a href="mailto:${email}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${email}</a>
              <span style="margin: 0 10px;">|</span>
              <a href="tel:${phone}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${phone}</a>
              </a>
              </div>
              <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px;">
              <a href="https://invity.io" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: underline;">invity.io</a>
              </div>
              <div style="margin: 0 10px; padding: 10px 0;">
                <hr style="margin: 0;">
              </div>
              <div style="display: flex; align-items: flex-end; margin-left: 10px; margin-bottom: 15px">
                <img src="https://s3.eu-central-1.amazonaws.com/testing-bucket.trezor.io/signature-logos/invity.png" style="margin-right: 10px; max-height: 40px;">
              </div>
            </div>
          </div>
            `;
            break;
            case "tropicsquare":
              signature += `
              <div style="width: 600px; height: 130px; background-color: white; border-radius: 10px; box-shadow: 0px 0px 10px #d9d9d9; padding-top: 10px; padding-bottom: 15px;">
              <div style="display: flex; flex-direction: column; padding: 15px;">
                <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                  <h1 style="margin: 0; font-size: 1em; font-weight: bold;">${name}</h1>
                </div>
                <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                  <p style="margin: 0; font-size: 0.7em; font-weight: lighter;">${position}</p>
                </div>
                <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                <a href="mailto:${email}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${email}</a>
                <span style="margin: 0 10px;">|</span>
                <a href="tel:${phone}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${phone}</a>
                </a>
                </div>
                <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px;">
                <a href="https://tropicsquare.com" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: underline;">tropicsquare.com</a>
                </div>
                <div style="margin: 0 10px; padding: 10px 0;">
                  <hr style="margin: 0;">
                </div>
                <div style="display: flex; align-items: flex-end; margin-left: 10px; margin-bottom: 15px">
                  <img src="https://s3.eu-central-1.amazonaws.com/testing-bucket.trezor.io/signature-logos/tropic.png" style="margin-right: 10px; max-height: 20px;">
                </div>
              </div>
            </div>
              `;
              break;
              case "vexl":
                signature += `
                <div style="width: 600px; height: 130px; background-color: white; border-radius: 10px; box-shadow: 0px 0px 10px #d9d9d9; padding-top: 10px; padding-bottom: 15px;">
                <div style="display: flex; flex-direction: column; padding: 15px;">
                  <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                    <h1 style="margin: 0; font-size: 1em; font-weight: bold;">${name}</h1>
                  </div>
                  <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                    <p style="margin: 0; font-size: 0.7em; font-weight: lighter;">${position}</p>
                  </div>
                  <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px; margin-bottom: 5px">
                  <a href="mailto:${email}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${email}</a>
                  <span style="margin: 0 10px;">|</span>
                  <a href="tel:${phone}" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: none;">${phone}</a>
                  </a>
                  </div>
                  <div style="display: flex; flex-direction: row; align-items: flex-start; margin-left: 10px;">
                  <a href="https://vexl.it" style="margin: 0; font-size: 0.7em; font-weight: lighter; color: black; text-decoration: underline;">vexl.it</a>
                  </div>
                  <div style="margin: 0 10px; padding: 10px 0;">
                    <hr style="margin: 0;">
                  </div>
                  <div style="display: flex; align-items: flex-end; margin-left: 10px; margin-bottom: 15px">
                    <img src="https://s3.eu-central-1.amazonaws.com/testing-bucket.trezor.io/signature-logos/vexl.png" style="margin-right: 10px; max-height: 20px;">
                  </div>
                </div>
              </div>
                `;
                break;
  }
      // Insert the signature into the HTML
  document.getElementById("signature").innerHTML = signature;
}

// Function to copy the generated HTML signature to the clipboard
function copySignature() {
  // Get the generated HTML signature
  var signature = document.getElementById("signature").innerHTML;
  // Create a text area element to hold the HTML signature
  var textArea = document.createElement("textarea");
  textArea.value = signature;
  document.body.appendChild(textArea);
  // Select the text in the text area
  textArea.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  // Remove the text area element
  document.body.removeChild(textArea);
  // Show a message to indicate that the HTML signature has been copied to the clipboard
  alert("HTML signature has been copied to the clipboard!");
}
