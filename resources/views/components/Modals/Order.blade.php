<div class="my-modal" id='order'>
  <div class="my-modal__container">
    <div class="my-modal__head">
      <div class="my-modal__head-back">
        <button class="btn btn_square" data-my-modal="data-my-modal"></button>
      </div>
      <div class="my-modal__head-text"></div>
      <div class="my-modal__head-close">
        <button class="btn btn_square" data-my-modal-close="#1"></button>
      </div>
    </div>
    <div class="my-modal__body">
        <form class="form-toOrder" action="send.php" method="post">Введите данные для расчета<br><br><br>
            <input type="text" class="popup-text-input" autocomplete="off" name="fio" placeholder="Введите имя" required><br><br>
            <input type="text" class="popup-text-input" autocomplete="off" name="email" placeholder="Введите номер телефона" required class="popup-text-input"><br><br>
            <input type="text"  class="popup-text-input3" autocomplete="off" name="email" placeholder="Комментарий к заявке" required><br><br>
            <input type="submit" class="input-type-submit" value="Отправить">
        </form>
    </div>
    <div class="my-modal__footer"></div>
  </div>
</div>