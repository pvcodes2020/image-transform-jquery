$(".main_div").hover(
  function () {
    $(this).find("img").css("transform", "rotate3d(0, 0, 1, 0deg)");
    $(this).find("h3").css("opacity", "1");
    $(this).find("img").css("transition-duration", "4s");
    $(this).find("div").css("top", "0px");
    $(this).find("div:nth-child(3)").css("left", "-100px");
    $(this).find("div:nth-child(2)").css("left", "150px");
    $(this).find("div:nth-child(1)").css("left", "400px");
    $(this).find("div").css("top", "0px");
  },
  function () {
    $(this).find("img").css("transform", "rotate3d(1, 1, 30, 90deg)");
    $(this).find("h3").css("opacity", "0");
    $(this).find("div:nth-child(2)").css("top", "50px");
    $(this).find("div:nth-child(1)").css("top", "100px");
    $(this).find("div:nth-child(3)").css("left", "0px");
    $(this).find("div:nth-child(2)").css("left", "50px");
    $(this).find("div:nth-child(1)").css("left", "100px");
  }
);