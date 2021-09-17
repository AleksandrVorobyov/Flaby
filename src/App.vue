<template lang="pug">
#page.page
  router-view
</template>

<style lang="scss">
:root {
  --header-bg: #42a8f6;
  --textWhite: #fff;
  --textGrey: #4d4d4d;
  --btnDoubleBg: #479ee1cc;

  --whiteBg: #fff;
  --bgFacebook: #3b579d;
  --bgGoogle: #da4835;
  --bgTwitter: #55acee;

  --mainTextTitle: #494949;
  --mainTextDesc: #7c7c7c;
  --btnBlueBg: #66d4f4;

  --fontRalewayBold: "Raleway-Bold";
  --fontRalewayBoldExtra: "Raleway-ExtraBold";
  --fontRalewayMedium: "Raleway-Medium";
  --fontRalewaySemiBold: "Raleway-SemiBold";
  --fontRobotoSlabRegular: "RobotoSlab-Regular";
  --fontArbutusSlabregular: "ArbutusSlabregular";
  --fontMuseoSlab-500: "MuseoSlab-500";
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  display: block;
  width: 100%;
  font-family: var(--fontRobotoSlabRegular);
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

img {
  user-select: none;
}
</style>
