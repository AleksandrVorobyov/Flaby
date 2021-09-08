<template lang="pug">
#page.page
  <router-view/>
</template>

<style lang="scss">
:root {
  --header-bg: #42a8f6;
  --textWhite: #fff;
  --textGrey: #4d4d4d;
  --btnDoubleBg: #479ee1cc;

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
  height: 200vh;
  font-family: var(--fontRobotoSlabRegular);
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

img {
  user-select: none;
}
</style>
