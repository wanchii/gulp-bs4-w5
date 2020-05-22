"use strict";

// $(document).ready(() => {
//   console.log('Hello Bootstrap4');
// });
//assignment頁面的reply-btn
$('.reply-btn').click(function (event) {
  /* Act on the event */
  console.log("editor");
  $(".askreply-footer").removeClass('d-flex');
  $(".askreply-footer").addClass('d-none');
  $(".reply").addClass('d-none'); // $(".reply").hide();

  $(".editor").show("slow");
});
$('.cancel-btn').click(function (event) {
  /* Act on the event */
  // 
  $(".askreply-footer").addClass('d-flex');
  $(".askreply-footer").removeClass('d-none');
  $(".reply").removeClass('d-none'); // $(".reply").show("slow");

  $(".editor").hide();
}); //admin頁面
//眼睛modal 向下箭頭和向上箭頭互換

$('.arrow-down').click(function (event) {
  $(".arrow-up").removeClass('d-none');
  $(".arrow-down").addClass('d-none');
});
$('.arrow-up').click(function (event) {
  $(".arrow-down").removeClass('d-none');
  $(".arrow-up").addClass('d-none');
}); //眼睛modal 取得data屬性 動態視窗內容

$('#visibilityModal').on('show.bs.modal', function (event) {
  var btn = $(event.relatedTarget); //取得點擊的按鈕class
  // console.log(btn);

  var name = btn.data('name'); //取得data-name

  var mail = btn.data('mail'); //取得data-mail

  var modal = $(this);
  modal.find('.admin-name').text(name);
  modal.find('.admin-mail').text(mail);
}); //editmodal 取得data屬性 動態視窗內容

$('#editModal').on('show.bs.modal', function (event) {
  var btn = $(event.relatedTarget); //取得點擊的按鈕class

  console.log(btn);
  var name = btn.data('name'); //取得data-name

  var mail = btn.data('mail'); //取得data-mail

  var modal = $(this);
  console.log(name);
  console.log(mail);
  modal.find('.account-name ').val(name);
  modal.find('.account-mail').val(mail);
});
//# sourceMappingURL=all.js.map
