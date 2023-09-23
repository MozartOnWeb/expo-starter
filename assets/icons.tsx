import React from "react";

export interface IconProps {
  type?: "active" | "inactive";
  tintColor?: string;
  size?: number;
}
// HOME
export const HomeIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3395 5.65935C19.0095 6.17835 19.4205 6.94935 19.4905 7.78835L19.5005 7.98935V16.0984C19.5005 18.1884 17.8495 19.8884 15.7805 19.9984H13.7905C12.8395 19.9794 12.0705 19.2394 12.0005 18.3094L11.9905 18.1684V15.3094C11.9905 14.9984 11.7595 14.7394 11.4505 14.6884L11.3605 14.6784H8.68949C8.37049 14.6884 8.11049 14.9184 8.07049 15.2184L8.06049 15.3094V18.1594C8.06049 18.2184 8.04949 18.2884 8.04049 18.3384L8.03049 18.3594L8.01949 18.4284C7.90049 19.2794 7.20049 19.9284 6.33049 19.9894L6.20049 19.9984H4.41049C2.32049 19.9984 0.610488 18.3594 0.500488 16.2984V7.98935C0.509488 7.13835 0.880488 6.34835 1.50049 5.79835L7.73049 0.788355C9.00049 -0.220645 10.7805 -0.260645 12.0895 0.668355L12.2505 0.788355L18.3395 5.65935ZM18.0995 16.2584L18.1105 16.0984V7.99835C18.0995 7.56935 17.9205 7.16835 17.6105 6.86935L17.4805 6.75835L11.3805 1.87835C10.6205 1.26835 9.54049 1.23935 8.74049 1.76835L8.58949 1.87835L2.50949 6.77935C2.16049 7.03835 1.95049 7.42835 1.90049 7.83835L1.88949 7.99835V16.0984C1.88949 17.4284 2.92949 18.5184 4.25049 18.5984H6.20049C6.42049 18.5984 6.61049 18.4494 6.63949 18.2394L6.66049 18.0594L6.67049 18.0084V15.3094C6.67049 14.2394 7.49049 13.3694 8.54049 13.2884H11.3605C12.4295 13.2884 13.2995 14.1094 13.3805 15.1594V18.1684C13.3805 18.3784 13.5305 18.5594 13.7305 18.5984H15.5895C16.9295 18.5984 18.0195 17.5694 18.0995 16.2584Z" fill="#200E32"/>
</svg>
`;

export const HomeActiveIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z" fill="#200E32"/>
</svg>
`;

// SAVED
export const SavedIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9857 0H5.01434C1.90915 0 0 1.49929 0 4.43434V18.3309C0.00448265 18.613 0.0704155 18.8782 0.192626 19.1174L0.286275 19.2719L0.384308 19.3975C0.895445 19.9969 1.7112 20.1624 2.38442 19.8037L7.974 16.6635L13.5863 19.7971C13.8368 19.9291 14.0965 19.9957 14.3608 20C14.8038 20.0001 15.2179 19.8242 15.5232 19.5112C15.8285 19.1982 16 18.7736 16 18.3309V4.25765C16 1.43503 14.0482 0 10.9857 0ZM5.01434 1.44775H10.9857C13.35 1.44775 14.588 2.35788 14.588 4.25765V18.3309C14.588 18.3897 14.5652 18.446 14.5247 18.4875C14.4842 18.529 14.4293 18.5523 14.372 18.5523C14.3355 18.5517 14.2887 18.5397 14.2463 18.5173L8.64351 15.3894C8.22503 15.1576 7.72327 15.1576 7.30683 15.3883L1.71962 18.5265C1.63485 18.5715 1.51373 18.5421 1.44919 18.4519L1.41172 18.3897C1.41894 18.4 1.41764 18.3876 1.4154 18.3662C1.414 18.3528 1.41223 18.3359 1.41195 18.3189L1.41205 4.43434C1.41205 2.39579 2.61925 1.44775 5.01434 1.44775ZM12.1139 7.0405C12.1139 6.64072 11.7978 6.31663 11.4079 6.31663H4.54042L4.44462 6.32324C4.10001 6.37117 3.8344 6.67404 3.8344 7.0405C3.8344 7.44029 4.1505 7.76438 4.54042 7.76438H11.4079L11.5037 7.75777C11.8483 7.70984 12.1139 7.40697 12.1139 7.0405Z" fill="#200E32"/>
</svg>
`;

export const SavedActiveIcon = `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#200E32"/>
</svg>
`;

// EXPLORE
export const ExploreIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 1.44774C14.7233 1.44774 18.5523 5.27672 18.5523 10C18.5523 14.7233 14.7233 18.5523 10 18.5523C5.27672 18.5523 1.44774 14.7233 1.44774 10C1.44774 5.27672 5.27672 1.44774 10 1.44774ZM13.0084 6.08461L8.09643 7.6218C7.87 7.69266 7.69266 7.87 7.6218 8.09643L6.08461 13.0084C5.91011 13.566 6.43404 14.0899 6.99164 13.9154L11.9036 12.3782C12.13 12.3073 12.3073 12.13 12.3782 11.9036L13.9154 6.99164C14.0899 6.43404 13.566 5.91011 13.0084 6.08461ZM12.1204 7.87856L11.109 11.109L7.87856 12.1204L8.89005 8.89005L12.1204 7.87856Z" fill="#200E32"/>
</svg>
`;

export const ExploreActiveIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0001C0 4.48012 4.47 0.00012207 10 0.00012207C15.52 0.00012207 20 4.48012 20 10.0001C20 15.5301 15.52 20.0001 10 20.0001C4.47 20.0001 0 15.5301 0 10.0001ZM12.23 11.8301L13.85 6.71012C13.96 6.36012 13.64 6.03012 13.29 6.14012L8.17 7.74012C7.96 7.81012 7.79 7.97012 7.73 8.18012L6.13 13.3101C6.02 13.6501 6.35 13.9801 6.69 13.8701L11.79 12.2701C12 12.2101 12.17 12.0401 12.23 11.8301Z" fill="#200E32"/>
</svg>
`;

// SETTING
export const SettingIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6161 2.17328e-07H9.38106C8.6855 2.17328e-07 8.01861 0.271551 7.52796 0.754574C7.09307 1.1827 6.82704 1.74716 6.77575 2.34781L6.76724 2.54181C6.75775 3.17352 6.24742 3.66634 5.62101 3.66628C5.47895 3.6648 5.33141 3.63238 5.19559 3.5713L5.06235 3.50171C3.83155 2.81017 2.23128 3.23376 1.50918 4.46166L0.859895 5.50695C0.169493 6.68048 0.510007 8.15476 1.62449 8.91408L1.77948 9.01151C2.16149 9.22838 2.37987 9.59896 2.37987 10C2.37987 10.3688 2.19491 10.7137 1.88645 10.9228L1.78115 10.9875C0.626514 11.6412 0.171573 13.0841 0.751966 14.2844L0.83679 14.4442L1.47412 15.5224C1.80539 16.1083 2.37306 16.5497 3.04445 16.7366C3.63953 16.9023 4.2746 16.8565 4.83762 16.6084L5.01565 16.5213C5.31529 16.3516 5.62484 16.3109 5.91538 16.3871C6.20591 16.4633 6.45336 16.65 6.6027 16.9057C6.68504 17.0418 6.73337 17.1822 6.75063 17.3277L6.75912 17.4753C6.75765 18.8493 7.93219 20 9.38106 20H10.6164C11.9845 20 13.12 18.9703 13.231 17.6414L13.2391 17.4698C13.2383 17.1379 13.3582 16.8524 13.5727 16.6422C13.7872 16.432 14.0786 16.3146 14.382 16.316C14.5214 16.3199 14.6746 16.3541 14.8166 16.4163L14.9527 16.485C16.1011 17.1344 17.6058 16.8008 18.3808 15.7089L18.4803 15.557L19.1399 14.4804C19.495 13.8833 19.5912 13.1817 19.4119 12.523C19.253 11.9391 18.8887 11.4297 18.3843 11.0841L18.2174 10.9793C17.9272 10.8149 17.736 10.5708 17.658 10.2844C17.58 9.99795 17.6218 9.69291 17.7742 9.43678C17.8585 9.29258 17.9706 9.17256 18.1051 9.08068L18.3624 8.92228C19.4043 8.22927 19.7945 6.86519 19.2461 5.71842L19.1892 5.60674C19.1769 5.57762 19.1627 5.54922 19.1465 5.52174L18.5333 4.47928C17.8511 3.31918 16.3759 2.86897 15.146 3.4355L14.9821 3.51839C14.6882 3.68688 14.3779 3.72947 14.0857 3.65514C13.7935 3.58081 13.5435 3.39567 13.3908 3.14055C13.3124 3.01116 13.2641 2.87079 13.2468 2.72535L13.2383 2.57766C13.2599 1.94968 12.9925 1.27681 12.4983 0.778711C12.0041 0.280615 11.3251 -0.000285223 10.6161 2.17328e-07ZM9.38106 1.44774H10.6164C10.9264 1.44761 11.2229 1.57029 11.4387 1.78783C11.6546 2.00537 11.7713 2.29923 11.7624 2.60249L11.7756 2.85454C11.8203 3.23984 11.9357 3.57504 12.1181 3.87616C12.4673 4.45965 13.0423 4.88546 13.7143 5.05641C14.3863 5.22736 15.1001 5.12941 15.6983 4.78415L15.8015 4.73265L15.9125 4.6891C16.4009 4.52853 16.9764 4.73175 17.253 5.20208L17.8378 6.19726L17.8505 6.22529L17.9212 6.35884C18.1578 6.85504 17.9601 7.4827 17.448 7.77613L17.2873 7.87532C16.9464 8.10733 16.6849 8.38716 16.4946 8.71262C16.1471 9.29707 16.0509 9.99866 16.2302 10.6574C16.3932 11.2563 16.7716 11.7748 17.2922 12.1195L17.5645 12.2882C17.7566 12.4207 17.915 12.6422 17.9841 12.896C18.0621 13.1824 18.0203 13.4875 17.868 13.7436L17.2236 14.7957L17.1511 14.9067C16.8529 15.3258 16.2647 15.4814 15.7687 15.2682L15.4528 15.11C15.1004 14.9547 14.7556 14.8778 14.4053 14.8686C13.6914 14.865 13.0212 15.1351 12.5279 15.6185C12.0345 16.1019 11.7588 16.7585 11.7621 17.4421L11.7565 17.5511C11.7099 18.1023 11.2137 18.5523 10.6164 18.5523H9.38106C8.79047 18.5523 8.30426 18.1145 8.24205 17.552L8.2219 17.1985C8.17721 16.8132 8.06179 16.478 7.87937 16.1768C7.54028 15.5959 6.96861 15.1645 6.29737 14.9886C5.62614 14.8126 4.91096 14.9066 4.3108 15.2497L4.20208 15.3018C3.98569 15.3964 3.70831 15.4164 3.44842 15.344C3.1552 15.2624 2.90728 15.0696 2.75952 14.8084L2.13027 13.7449L2.07398 13.6383C1.83562 13.144 2.03354 12.5163 2.54639 12.2256L2.70219 12.1296C3.43413 11.634 3.85754 10.8446 3.85754 10C3.85754 9.14295 3.42197 8.34666 2.70395 7.871L2.44324 7.70925C1.98256 7.39466 1.83377 6.75044 2.13128 6.24455L2.78057 5.19925C3.1049 4.64815 3.8038 4.46315 4.3519 4.77085L4.54427 4.87026C4.90355 5.03293 5.25588 5.11034 5.61326 5.11398C6.99969 5.11416 8.13339 4.07087 8.23685 2.7415L8.25028 2.43661C8.27058 2.20741 8.38625 1.96196 8.57533 1.77582C8.78866 1.56581 9.07863 1.44774 9.38106 1.44774ZM10.0032 6.73182C8.16095 6.73182 6.66748 8.19503 6.66748 10C6.66748 11.805 8.16095 13.2682 10.0032 13.2682C11.8455 13.2682 13.339 11.805 13.339 10C13.339 8.19503 11.8455 6.73182 10.0032 6.73182ZM10.0032 8.17956C11.0294 8.17956 11.8613 8.9946 11.8613 10C11.8613 11.0054 11.0294 11.8204 10.0032 11.8204C8.97705 11.8204 8.14516 11.0054 8.14516 10C8.14516 8.9946 8.97705 8.17956 10.0032 8.17956Z" fill="#200E32"/>
</svg>
`;

export const SettingActiveIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.4023 11.5801C18.76 11.7701 19.036 12.0701 19.2301 12.3701C19.6083 12.9901 19.5776 13.7501 19.2097 14.4201L18.4943 15.6201C18.1162 16.2601 17.411 16.6601 16.6855 16.6601C16.3278 16.6601 15.9292 16.5601 15.6022 16.3601C15.3365 16.1901 15.0299 16.1301 14.7029 16.1301C13.6911 16.1301 12.8429 16.9601 12.8122 17.9501C12.8122 19.1001 11.872 20.0001 10.6968 20.0001H9.30692C8.12145 20.0001 7.18125 19.1001 7.18125 17.9501C7.16081 16.9601 6.31259 16.1301 5.30085 16.1301C4.96361 16.1301 4.65702 16.1901 4.40153 16.3601C4.0745 16.5601 3.66572 16.6601 3.31825 16.6601C2.58245 16.6601 1.87729 16.2601 1.49917 15.6201L0.79402 14.4201C0.415896 13.7701 0.395456 12.9901 0.773581 12.3701C0.937094 12.0701 1.24368 11.7701 1.59115 11.5801C1.87729 11.4401 2.06125 11.2101 2.23498 10.9401C2.74596 10.0801 2.43937 8.95012 1.57071 8.44012C0.55897 7.87012 0.231943 6.60012 0.814459 5.61012L1.49917 4.43012C2.09191 3.44012 3.35913 3.09012 4.38109 3.67012C5.27019 4.15012 6.425 3.83012 6.9462 2.98012C7.10972 2.70012 7.20169 2.40012 7.18125 2.10012C7.16081 1.71012 7.27323 1.34012 7.4674 1.04012C7.84553 0.420122 8.53024 0.0201221 9.27627 0.00012207H10.7172C11.4735 0.00012207 12.1582 0.420122 12.5363 1.04012C12.7203 1.34012 12.8429 1.71012 12.8122 2.10012C12.7918 2.40012 12.8838 2.70012 13.0473 2.98012C13.5685 3.83012 14.7233 4.15012 15.6226 3.67012C16.6344 3.09012 17.9118 3.44012 18.4943 4.43012L19.179 5.61012C19.7718 6.60012 19.4447 7.87012 18.4228 8.44012C17.5541 8.95012 17.2475 10.0801 17.7687 10.9401C17.9322 11.2101 18.1162 11.4401 18.4023 11.5801ZM7.10972 10.0101C7.10972 11.5801 8.4076 12.8301 10.0121 12.8301C11.6165 12.8301 12.8838 11.5801 12.8838 10.0101C12.8838 8.44012 11.6165 7.18012 10.0121 7.18012C8.4076 7.18012 7.10972 8.44012 7.10972 10.0101Z" fill="#200E32"/>
</svg>
`;
