const longTimeFn = () => {
  console.log("server side something gogo ");
  // await serverSideSth();
  return new Promise(function (resolve, reject) {
    console.log("...ing, 3초뒤 완료");
    setTimeout(() => resolve("완료!"), 3000);
  });
};

export { longTimeFn };
