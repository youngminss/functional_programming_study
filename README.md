# 함수형 프로그래밍 스터디 개인 NOTE

> 함수형 프로그래밍이라는 개념과 철학을 공부해서 함수형 사고에 초점을 맞춥시다🔎

- ⛔️ 이 스터디는 팀 과제 중심형입니다.

<br />

## 🙋‍♂️ 진행 방식

- [태오](https://github.com/developer-1px)가 간단한 개념을 설명하고, 팀 별로 라이브 과제를 수행합니다.
- [파랑](https://github.com/InSeong-So)이 복습용 과제를 할당하고, 이를 풀어 팀원들과 공유해봅니다.

<br/>

## 👨‍👩‍👦‍👦 함께한 팀원

| 성명 | 프로필 |
|:---:|:---:|
|도비| https://github.com/dohye1 |
|로나| 알게되면 추가 🥹 |
|빅터(나)| https://github.com/youngminss |
|허브| https://github.com/hhhminme |

<br />

## 🌟회차별 정리내용

### 1️⃣ 주차

>  "함수형 사고" 를 해라.

>  함수형 프로그래밍의 시작은 코드를 "데이터", "계산", "액션" 으로 분리하는 것부터가 시작이다.

<br />

<details>
<summary>👀 테오의 말말말</summary>

```ts
<1주차 스터디 회고>

안녕하세요 테오입니다!! 오늘 늦은시간까지 다들 즐겁게 스터디에 임해주셔서 감사합니다.

언뜻 책을 읽다보면 액션과 계산과 데이터의 정의가 너무 분명하고 쉽게 설명하다보니 눈으로 그냥 따라가다 보면 너무나 당연해 보이는 액션 - 계산 - 데이터로 분리하는 작업이 별거 아닌 것처럼 보이는 착각을 일으킵니다.

그렇지만 오늘 막상 정답을 보지 않고 코드를 리팩토링을 직접 시도를 했을 때,
'아~ 이게 마냥 쉬운 것은 아니었구나.' 하고 몸소 느꼈다면 오늘은 그것만으로도 충분한 시간이라고 생각합니다.

오늘 스터디의 핵심은 테스터의 입장이 되어 "돌아가기는 하지만 좋지 않은 코드"는 왜 문제가 되는지 또 어디가 문제인지를 느끼고
어떻게 하면 더 좋은 코드가 될 수 있는지를 함께 이야기를 나눠보는 것이었습니다.

다들 느끼셨겠지만 액션은 테스트 코드를 작성하기가 매우 어렵습니다.
누군가 "이 함수는 undefined를 반환하는 데 어떻게 테스트 코드를 작성해요?" 라고 물어보기도 했습니다.

맞습니다! 액션은 반환값도 없고 결과를 증명할 방법도 어려우며 실행할때마다 조건을 만들기도 결과를 예측하기도 어려운 코드입니다.
당연히 테스트를 할 수 없는 코드는 좋지 않은 코드입니다.
계산은 액션과 달리 입력값과 반환값이 존재하고 언제나 같은 입력에 대해서는 같은 결과를 반환합니다.
그렇기에 테스트를 하기 용이하고 테스트 코드를 작성하기도 쉽습니다.

그래서 우리는 액션보다는 계산의 형태로 코드를 작성해야 합니다.
그렇지만 모든 코드를 계산형식으로만 작성할 수는 없습니다.
액션이 없으면 프로그램은 완성되지 않습니다.

그래서 액션 안에서 계산으로 뽑을 수 있는 부분들을 분리하여
데이터 -> 액션 -> 계산 -> 계산 -> 계산 -> 액션 -> 데이터 과 같은 계층 구조를 만들어 내는 것이 함수형 프로그래밍이고 함수형 사고입니다.

이번주에는 우리가 무엇을 배우고 있는 것인지 그리고 이걸 왜 하는 것인지 라는 것을 몸소 느꼈으니 다음주에는 보다 "어떻게?" 라는 부분에 조금 더 포커스를 맞춰서 설명을 드리고 다 같이 코드를 작성하는 시간을 가져보려고 합니다.

다음주 스터디 전에 꼭 알아야할 핵심 개념 주제 3가지는 꼭 책을 통해서 숙지를 해오시면 좋을 것 같아요.

✅ 액션 - "계산" - 데이터
✅ 암묵적 입출력 vs "명시적 입출력"
✅ 불변성과 "카피-온-라이트"

다음주에도 오늘 함께 했던 우리 즐거운 팀원들과 함께 재미난 스터디가 되기를 바랍니다.

모두 모두 수고 많으셨습니다.
다음주 수요일날 만나요!
```
</details>

<br />

`깨달은 점(실질적)`

1. "액션" 에서 "계산" 부분을 함수로 추출(extraction subroutine)하자.
2. 추출한 계산(=함수)에서 암묵적 입/출력을 찾자.
3. 암묵적 입력은 최대한 인자로, 암묵적 출력은 리턴값으로 바꾸자.


`깨달은 점(개념적)`

+ "액션"은 코드 전체로 퍼져나갈 수 있다.(따라서 조심히 사용해야한다.)


`알게된 점(기타)`

+ function 키워드보단 Arrow Function 을 사용하자.

<br/>

---

### 2️⃣ 주차

진행중.