item = [];
;(function ($) {
  getCommodity()

})(jQuery);

/** 鉄道路線情報 odpt:Commodity */
function getCommodity() {
  jsRoutes.controllers.AjaxController.getCommodity().ajax({
    beforeSend: function() {},
    complete: function() {},
    success: function(result) {
      console.log(result)
      item = result;
      console.log(item)
    },
    error: function(result) {
      window.alert("エラーが発生しました。画面を更新して頂くか、時間をおいてから再度お試し下さい。");
      console.log("error : " + result)
    }
  });
}
