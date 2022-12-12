/**
 * 질문 리스트
 * - 함수형 프로그래밍 컨셉에 맞게 [데이터 -> 계산 -> 액션] 순으로 코드를 분리하고 배치도 한다.
 *   - but, 실제로 코드를 읽는 관점에서는 위에서 아래로 읽는 것이 개발자 입장에서는 편하다고 생각.
 *   - 즉, A 라는 액션(=함수)에서 내부적으로 C 라는 계산(=함수)가 있어서 내부 구현체를 확인하고 싶을 경우, 아래로 쭉쭉 내려가면서 함수 구현체를 확인하는 것이 이전까지 내 개발 컨셉이었음
 */

/****************************************************************************
 *
 *                                  Data
 *
 ***************************************************************************/

/****************************************************************************
 *
 *                                  Calculator
 *
 ***************************************************************************/
const add_item_last_to_cart = (cart, newItem) => [...cart, newItem];
const calc_total = (cart) => cart.reduce((acc, cur) => (acc += cur.price), 0);
const is_shipping_free = (item, shopping_cart_total) => item.price + shopping_cart_total >= 20;
const calc_tax = (shopping_cart_total) => shopping_cart_total * 0.1;

/****************************************************************************
 *
 *                                  Actions
 *
 ***************************************************************************/
var shopping_cart = [];
var shopping_cart_total = 0;

const add_item_to_cart = (name, price) => {
  shopping_cart = add_item_last_to_cart(shopping_cart, { name, price });
  calc_cart_total(shopping_cart);
};

const calc_cart_total = (cart) => {
  shopping_cart_total = calc_total(cart);

  set_cart_total_dom(); // NOTE 의미 상 필요한 함수 :: 장바구니 내 총액을 화면에 표시하는 함수
  update_shipping_icons();
  update_tax_dom(); // NOTE 의미 상 필요한 함수 :: 총액에 대한 세금을 화면에 표시하는 함수
};

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom(); // NOTE 의미 상 필요한 함수 :: 돔 조작을 위한 함수

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if (is_shipping_free(item, shopping_cart_total)) {
      button.show_free_shipping_icon(); // NOTE 의미 상 필요한 함수 :: 공짜 아이콘을 버튼 옆에 보여준다.
    } else {
      button.hide_free_shipping_icon(); // NOTE 의미 상 필요한 함수 :: 공짜 아이콘을 버튼 옆에서 숨켜준다.
    }
  }
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}
