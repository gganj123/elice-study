class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // "my name is" + this.name을 출력하는 say() 함수를 완성하세요.
    say() {
      console.log('my name is ' + this.name);
    }
  }
  
  // Person 클래스의 인스턴스를 생성하여 "my name is 엘리스"가 출력되도록 say() 함수를 호출하세요.
  const person = new Person('엘리스');
  person.say();
  
  // 타입스크립트에서의 함수 매개변수는 변수에서의 매개변수 설정과 동일합니다.
// 다만 입력값도 타입이 있고, 출력값도 타입이 있어야 하므로 신경써야겠죠?
function addTwo(a: number, b: number): number {
  return a + b;
}

console.log(addTwo(2, 3));

// 한 개의 매개변수가 들어올 수도 있고, 두 개의 매개변수가 들어올 수도 있습니다.
// ?를 사용하는 것을 제외하면, 위 함수와 동일하게 작성합니다!
function addOneOrTwo(a?: number, b: number): number {}

console.log(addOneOrTwo(5, 10));
console.log(addOneOrTwo(10));

// JS에서도 기본값을 포함하는 함수를 만들어 본 적이 있지 않나요?
// 이번에도 마찬가지입니다!
// 두 개의 인자를 받되, 숫자가 1개만 들어오면 10을 더하도록 만들어 보세요.
function addDefault() {}
console.log(addDefault(3)); // return 13
console.log(addDefault(12, 15));

// JS도 가변인자 (나머지 매개변수)를 갖고 있어요.
// 워낙 유용하다보니, 많이 사용했을 것 같지만, 한 번 더 연습해 봅시다.
function addTwoOrMore() {}

console.log(addTwoOrMore(2, 1));
console.log(addTwoOrMore(8, 8, 6, 1, 9, 6));
\