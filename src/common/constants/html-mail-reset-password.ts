export const htmlCodeResetPassword = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <style type="text/css">.rollover:hover .rollover-first {
      max-height: 0 !important;
      display: none !important;
  }

  .rollover:hover .rollover-second {
      max-height: none !important;
      display: inline-block !important;
  }

  .rollover div {
      font-size: 0;
  }

  u ~ div img + div > div {
      display: none;
  }

  #outlook a {
      padding: 0;
  }

  span.MsoHyperlink, span.MsoHyperlinkFollowed {
      color: inherit;
  }

  a.es-button {
      text-decoration: none !important;
  }

  a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
  }

  .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
  }

  .es-header-body a:hover {
      color: #666666 !important;
  }

  .es-content-body a:hover {
      color: #5c68e2 !important;
  }

  .es-footer-body a:hover {
      color: #333333 !important;
  }

  .es-infoBlock a:hover {
      color: #cccccc !important;
  }

  .es-button-border:hover > a.es-button {
      color: #ffffff !important;
  }

  @media only screen and (max-width: 600px) {
      .es-m-p0r {
          padding-right: 0 !important
      }

      .es-m-p0r {
          padding-right: 0 !important
      }

      .es-m-p0l {
          padding-left: 0 !important
      }

      *[class="gmail-fix"] {
          display: none !important
      }

      p, a {
          line-height: 150% !important
      }

      h1, h1 a {
          line-height: 120% !important
      }

      h2, h2 a {
          line-height: 120% !important
      }

      h3, h3 a {
          line-height: 120% !important
      }

      h4, h4 a {
          line-height: 120% !important
      }

      h5, h5 a {
          line-height: 120% !important
      }

      h6, h6 a {
          line-height: 120% !important
      }

      .es-header-body p {
      }

      .es-content-body p {
      }

      .es-footer-body p {
      }

      .es-infoBlock p {
      }

      h1 {
          font-size: 36px !important;
          text-align: left
      }

      h2 {
          font-size: 26px !important;
          text-align: left
      }

      h3 {
          font-size: 20px !important;
          text-align: left
      }

      h4 {
          font-size: 24px !important;
          text-align: left
      }

      h5 {
          font-size: 20px !important;
          text-align: left
      }

      h6 {
          font-size: 16px !important;
          text-align: left
      }

      .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {
          font-size: 36px !important
      }

      .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {
          font-size: 26px !important
      }

      .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {
          font-size: 20px !important
      }

      .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a {
          font-size: 24px !important
      }

      .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a {
          font-size: 20px !important
      }

      .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a {
          font-size: 16px !important
      }

      .es-menu td a {
          font-size: 12px !important
      }

      .es-header-body p, .es-header-body a {
          font-size: 14px !important
      }

      .es-content-body p, .es-content-body a {
          font-size: 14px !important
      }

      .es-footer-body p, .es-footer-body a {
          font-size: 14px !important
      }

      .es-infoBlock p, .es-infoBlock a {
          font-size: 12px !important
      }

      .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 {
          text-align: center !important
      }

      .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 {
          text-align: right !important
      }

      .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 {
          text-align: justify !important
      }

      .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 {
          text-align: left !important
      }

      .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img, .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important
      }

      .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important
      }

      .es-spacer {
          display: inline-table
      }

      a.es-button, button.es-button {
          font-size: 20px !important
      }

      .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button {
          display: block !important
      }

      .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu {
          display: inline-block !important
      }

      .es-adaptive table, .es-left, .es-right {
          width: 100% !important
      }

      .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header {
          width: 100% !important;
          max-width: 600px !important
      }

      .adapt-img {
          width: 100% !important;
          height: auto !important
      }

      .es-mobile-hidden, .es-hidden {
          display: none !important
      }

      .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important
      }

      tr.es-desk-hidden {
          display: table-row !important
      }

      table.es-desk-hidden {
          display: table !important
      }

      td.es-desk-menu-hidden {
          display: table-cell !important
      }

      .es-menu td {
          width: 1% !important
      }

      table.es-table-not-adapt, .esd-block-html table {
          width: auto !important
      }

      .es-social td {
          padding-bottom: 10px
      }

      .h-auto {
          height: auto !important
      }

      a.es-button, button.es-button {
          display: inline-block !important
      }

      .es-button-border {
          display: inline-block !important
      }
  }</style><title></title>
</head>
<body style="width:100%;height:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#EFEFEF">
  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
         style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFEFEF">
    <tr>
      <td valign="top" style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" class="es-header" align="center"
               style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
            <td align="center" style="padding:0;Margin:0">
              <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0"
                     style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:transparent;width:600px">
                <tr>
                  <td align="left" style="padding:20px;Margin:0">
                    <table cellpadding="0" cellspacing="0" width="100%"
                           style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                      <tr>
                        <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                          <table cellpadding="0" cellspacing="0" width="100%"
                                 style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                            <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
               style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;width:100%;table-layout:fixed !important">
          <tr>
            <td align="center" bgcolor="#efefef" style="padding:0;Margin:0;background-color:#efefef">
              <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                     style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:separate;border-spacing:0;background-color:#ffffff;width:600px;border-width:0">
                <tr>
                  <td align="left"
                      style="padding:0;Margin:0;padding-top:15px;padding-right:20px;padding-left:20px;border-radius:22px">
                    <table cellpadding="0" cellspacing="0" width="100%"
                           style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                      <tr>
                        <td align="center" valign="top" style="padding:0;Margin:0;width:554px">
                          <table cellpadding="0" cellspacing="0" width="100%" 
                                 style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                            <tr>
                              <td align="center"
                                  style="Margin:0;padding-top:10px;padding-bottom:10px;font-size:0"><img
                                src="https://qlexnd.stripocdn.email/content/guids/CABINET_91d375bbb7ce4a7f7b848a611a0368a7/images/69901618385469411.png"
                                alt=""
                                style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:0"
                                width="100" height="100"></td>
                            </tr>
                            <tr>
                              <td align="center" class="es-m-p0r es-m-p0l es-m-txt-c"
                                  style="Margin:0;padding-right:40px;padding-bottom:15px;padding-left:40px">
                                <h1
                                  style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px;color:#333333">
                                  Сброс пароля</h1></td>
                            </tr>
                            <tr>
                              <td align="left" style="Margin:0;padding-top:10px"><h6
                                style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:16px;font-style:normal;font-weight:normal;line-height:19px;color:#333333">
                                <em>После того, как вы нажмете на кнопку, вам будет предложено выполнить следующие
                                  действия:</em></h6><ol style="font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0 0 0
                                40px;margin:15px 0">
                                <li style="color:#333333;margin:0 0 10px">Введите новый пароль.</li>
                                <li style="color:#333333;margin:0 0 10px">Нажмите кнопку отправить.</li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </ol>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
                    <table cellpadding="0" cellspacing="0" width="100%"
                           style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                      <tr>
                        <td align="center" valign="top" style="padding:0;Margin:0;width:554px">
                          <table cellpadding="0" cellspacing="0" width="100%"
                                 style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:separate;border-spacing:0;border-radius:5px"
                                 >
                            <tr>
                              <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px"><span
                                class="es-button-border"
                                style="border-style:solid;border-color:#2CB543;background:#5C68E2;border-width:0;display:inline-block;border-radius:6px;width:auto"><a
                                href="https://saturday-one.vercel.app/confirm-email/##token##" class="es-button" target="_blank"
                                style="text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #5C68E2;border-left-width:30px;border-right-width:30px">Сбросить пароль</a></span>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" class="es-m-txt-c" style="Margin:0;padding-top:10px"><h3
                                style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:30px;color:#333333">
                                Ссылка действительна только для однократного использования. Истекает через 2 часа.</h3>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="Margin:0;padding-top:10px;padding-bottom:10px"><p
                                style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                Если вы не запрашивали сброс своего пароля, пожалуйста, не обращайте внимания на это
                                сообщение.</p></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center"
               style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;width:100%;table-layout:fixed !important">
          <tr>
            <td class="es-info-area" align="center" style="padding:0;Margin:0">
              <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                     style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:transparent;width:600px"
                     bgcolor="#FFFFFF">
                <tr>
                  <td align="left" style="padding:20px;Margin:0">
                    <table cellpadding="0" cellspacing="0" width="100%"
                           style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                      <tr>
                        <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                          <table cellpadding="0" cellspacing="0" width="100%"
                                 style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0">
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
</body>
</html>

`
