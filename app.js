$(document).ready(function () {
  var cursor = $(".cursor");

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2,
    });
  });

  $(window)
    .mouseleave(function () {
      cursor.css({
        opacity: "0",
      });
    })
    .mouseenter(function () {
      cursor.css({
        opacity: "1",
      });
    });

  $(".buttons button")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1.75)",
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });

  $(".about a")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1.75)",
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });

  $(".projects a h1")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1.75)",
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });

  $(window)
    .mousedown(function () {
      cursor.css({
        transform: "scale(.2)",
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });
});

$(function () {
  $("#exp-btn").click(function () {
    if ($("#projects").is(":visible")) {
      $("#projects").slideToggle(400, "linear");
      $("#exp-btn").css({ "text-decoration": "1px underline" });
      $("#prj-btn").css({ "text-decoration": "none" });
    }
    if ($("#about").is(":visible")) {
      $("#about").slideToggle(400, "linear");
      $("#exp-btn").css({ "text-decoration": "1px underline" });
      $("#abt-btn").css({ "text-decoration": "none" });
    }
    if ($("#name").is(":visible")) {
      $("#name").slideToggle(400, "linear");
      $("#exp-btn").css({ "text-decoration": "1px underline" });
    }
    if (
      $("#name").is(":hidden") &&
      $("#experience").is(":visible") &&
      $("#projects").is(":hidden") &&
      $("#about").is(":hidden")
    ) {
      $("#name").slideToggle(400, "linear");
      $("#exp-btn").css({ "text-decoration": "none" });
    }
    $("#experience").slideToggle(800, "linear");
  });
});

$(function () {
  $("#prj-btn").click(function () {
    if ($("#experience").is(":visible")) {
      $("#experience").slideToggle(400, "linear");
      $("#prj-btn").css({ "text-decoration": "1px underline" });
      $("#exp-btn").css({ "text-decoration": "none" });
    }
    if ($("#about").is(":visible")) {
      $("#about").slideToggle(400, "linear");
      $("#prj-btn").css({ "text-decoration": "1px underline" });
      $("#abt-btn").css({ "text-decoration": "none" });
    }
    if ($("#name").is(":visible")) {
      $("#name").slideToggle(400, "linear");
      $("#prj-btn").css({ "text-decoration": "1px underline" });
    }
    if (
      $("#name").is(":hidden") &&
      $("#experience").is(":hidden") &&
      $("#projects").is(":visible") &&
      $("#about").is(":hidden")
    ) {
      $("#name").slideToggle(400, "linear");
      $("#prj-btn").css({ "text-decoration": "none" });
    }
    $("#projects").slideToggle(800, "linear");
  });
});

$(function () {
  $("#abt-btn").click(function () {
    if ($("#experience").is(":visible")) {
      $("#experience").slideToggle(400, "linear");
      $("#abt-btn").css({ "text-decoration": "1px underline" });
      $("#exp-btn").css({ "text-decoration": "none" });
    }
    if ($("#projects").is(":visible")) {
      $("#projects").slideToggle(400, "linear");
      $("#abt-btn").css({ "text-decoration": "1px underline" });
      $("#prj-btn").css({ "text-decoration": "none" });
    }
    if ($("#name").is(":visible")) {
      $("#abt-btn").css({ "text-decoration": "1px underline" });
    }
    if ($("#name").is(":hidden")) {
      $("#name").slideToggle(400, "linear");
      $("#abt-btn").css({ "text-decoration": "1px underline" });
    }
    if ($("#about").is(":visible")) {
      $("#abt-btn").css({ "text-decoration": "none" });
    }
    $("#about").slideToggle(800, "linear");
  });
});
