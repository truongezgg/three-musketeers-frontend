import React, { FC } from 'react';

interface IProps {
  fill?: string;
}
const IconTransaction: FC<IProps> = (props) => {
  return (
    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.18379 0C5.70703 0 6.18223 0.214109 6.525 0.55916C6.68496 0.720774 6.8168 0.91011 6.91172 1.12068H10.0002C10.0951 0.910699 10.227 0.720774 10.3863 0.55975C10.7297 0.214699 11.2043 0 11.7281 0C12.2514 0 12.7266 0.214699 13.0693 0.55916C13.2293 0.720774 13.3611 0.910699 13.4561 1.12068H16.5445C16.6395 0.910699 16.7713 0.720774 16.9312 0.55975C17.2746 0.214699 17.7492 0 18.2725 0C18.7963 0 19.2709 0.214699 19.6137 0.55916C19.7742 0.720774 19.9055 0.910699 20.0004 1.12068H23.0883C23.1832 0.910699 23.315 0.720774 23.4744 0.55975C23.8178 0.214699 24.293 0 24.8168 0C25.34 0 25.8146 0.214699 26.1574 0.55916C26.3174 0.720774 26.4492 0.910699 26.5441 1.12068H29.216C29.649 1.12068 30 1.47399 30 1.90987V21.8173C29.9982 22.1175 29.8266 22.4042 29.5377 22.5351C25.9318 24.1831 20.4879 25 15.0557 25C9.62813 25 4.17129 24.1831 0.530859 22.5646C0.22207 22.4584 0 22.1641 0 21.8173V1.90987C0 1.47399 0.350977 1.12068 0.783398 1.12068H3.45586C3.55078 0.910699 3.68262 0.720774 3.84258 0.55975C4.18594 0.214699 4.66055 0 5.18379 0ZM12.6832 16.3554C13.1566 16.3554 13.5404 16.7424 13.5404 17.2184C13.5404 17.6943 13.1566 18.0813 12.6832 18.0813C12.2104 18.0813 11.8266 17.6943 11.8266 17.2184C11.8266 16.7424 12.2104 16.3554 12.6832 16.3554ZM12.6832 12.1328C13.1566 12.1328 13.5404 12.5186 13.5404 12.9952C13.5404 13.4717 13.1566 13.8581 12.6832 13.8581C12.2104 13.8581 11.8266 13.4717 11.8266 12.9952C11.8266 12.5186 12.2104 12.1328 12.6832 12.1328ZM12.6832 7.95328C13.1566 7.95328 13.5404 8.34021 13.5404 8.81621C13.5404 9.2922 13.1566 9.67913 12.6832 9.67913C12.2104 9.67913 11.8266 9.2922 11.8266 8.81621C11.8266 8.34021 12.2104 7.95328 12.6832 7.95328ZM21.8127 16.4504C22.234 16.4504 22.5756 16.7943 22.5756 17.2184C22.5756 17.6424 22.234 17.9863 21.8127 17.9863H15.5098C15.0885 17.9863 14.7469 17.6424 14.7469 17.2184C14.7469 16.7943 15.0885 16.4504 15.5098 16.4504H21.8127ZM25.2041 12.2266C25.6254 12.2266 25.967 12.5711 25.967 12.9952C25.967 13.4193 25.6254 13.7631 25.2041 13.7631H15.5098C15.0885 13.7631 14.7469 13.4193 14.7469 12.9952C14.7469 12.5711 15.0885 12.2266 15.5098 12.2266H25.2041ZM25.4988 8.04825C25.9201 8.04825 26.2623 8.39212 26.2623 8.81621C26.2623 9.2403 25.9201 9.58417 25.4988 9.58417H15.5098C15.0885 9.58417 14.7469 9.2403 14.7469 8.81621C14.7469 8.39212 15.0885 8.04825 15.5098 8.04825H25.4988ZM6.31113 17.3393C5.77383 17.3009 5.08945 17.1682 4.5627 17.0255V15.1357L5.09355 15.1793C5.7791 15.22 6.70957 15.2926 7.38223 15.2318C7.51289 15.22 7.66523 15.1976 7.78418 15.1392C8.01035 15.0301 8.00742 14.2545 7.85801 14.1477C7.77187 14.0864 7.67402 14.0628 7.56973 14.0628H7.02187C6.60879 14.0628 6.24316 14.0162 5.92441 13.923C5.5998 13.828 5.32617 13.6853 5.10293 13.4948C4.875 13.2989 4.70449 13.04 4.59199 12.7174C4.48359 12.4036 4.42793 12.0302 4.42793 11.5973V10.8771C4.42793 10.476 4.48887 10.1233 4.61016 9.81892C4.81172 9.31462 5.23008 8.91058 5.71582 8.68114C5.88574 8.60092 6.07617 8.54017 6.31113 8.50065V7.6625H8.04199V8.46762C8.32852 8.49003 8.55059 8.53014 8.83125 8.58146C9.15234 8.63749 9.46348 8.70119 9.78047 8.77846V10.6712L9.61348 10.6565C8.90284 10.5945 8.18987 10.5634 7.47656 10.5633C7.26914 10.5633 6.87363 10.5686 6.71719 10.7261C6.58887 10.8547 6.60762 11.6244 6.7459 11.7382C6.85019 11.8232 7.02773 11.8379 7.15547 11.8379H7.83809C8.27754 11.8379 8.73223 11.9134 9.11777 12.1346C9.46523 12.3334 9.72715 12.6047 9.90234 12.9468C9.98848 13.1155 10.0541 13.2966 10.0975 13.49C10.1924 13.9118 10.1631 14.383 10.1631 14.816C10.1631 15.1545 10.1326 15.4565 10.0734 15.7202C10.0125 15.9897 9.91934 16.2198 9.7957 16.4091C9.40898 16.9995 8.71523 17.2561 8.04199 17.3304V18.2382H6.31113V17.3393ZM6.91172 2.69848C6.81719 2.90724 6.68621 3.09723 6.525 3.25941C6.18164 3.60505 5.70703 3.81975 5.18379 3.81975C4.66055 3.81975 4.18535 3.60505 3.84258 3.25941C3.68111 3.09744 3.5501 2.90741 3.45586 2.69848H1.56738V21.2994C4.99629 22.7109 10.0207 23.4222 15.0557 23.4222C20.0572 23.4222 25.0354 22.7191 28.4326 21.3012V2.69848H26.5441C26.4496 2.90724 26.3186 3.09723 26.1574 3.25941C25.8141 3.60505 25.3389 3.81975 24.8168 3.81975C24.293 3.81975 23.8184 3.60505 23.4756 3.26C23.3141 3.09774 23.1829 2.90753 23.0883 2.69848H20.0004C19.9062 2.90762 19.7752 3.09787 19.6137 3.26C19.2703 3.60505 18.7957 3.81975 18.2725 3.81975C17.7492 3.81975 17.274 3.60505 16.9312 3.25941C16.7698 3.09744 16.6388 2.90741 16.5445 2.69848H13.4561C13.3617 2.9075 13.2307 3.09771 13.0693 3.26C12.726 3.60505 12.2514 3.81975 11.7281 3.81975C11.2043 3.81975 10.7297 3.60505 10.3863 3.25941C10.2252 3.09727 10.0944 2.90726 10.0002 2.69848H6.91172Z"
        fill={props.fill || '#105F49'}
      />
    </svg>
  );
};

export default IconTransaction;
