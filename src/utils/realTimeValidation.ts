/* MEMO: 正規表現は指定の形式の否定形を渡す。
 * 半角数字のみ受け付ける場合、/[^0-9]$/g
 * ^が否定を表す。最後の"g"がなければreplaceAllにおいてTypeErrorが発生する。
 */
const realTimeValidation = (regex: RegExp, currentRef: HTMLInputElement) => {
  // MEMO: 文字削除後のカーソル位置を保持する変数
  const selectStart = currentRef.value.substring(0, currentRef.selectionStart!).replaceAll(regex, "").length;

  // MEMO: 一文字ずつの配列に変換
  const inputValue = currentRef.value.split("");
  // MEMO: 指定された形式の文字からなる文字列を別に生成
  const result = inputValue.map((char) => (regex.test(char) ? "" : char)).join("");

  currentRef.value = result;
  currentRef.setSelectionRange(selectStart, selectStart);
};

export default realTimeValidation;
