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
|로나| https://github.com/choisy9619 |
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
<details>
<summary>👍 1주차 - 4LS</summary>

```ts
1주차 - 4LS

Like (좋았던 것)
새로운 사람들을 처음 만났음에도, 닉네임과 같은 릴리즈 요소들 적용해서 아이스 브레이킹을 함으로써 분위기를 형성할 수 있었던 점을 배울 수 있었습니다.

Learnd (배운 것)
똑같은 코드를 role 을 나눠서 "개발자" / "테스터" 로 나눠, 이 짧은 시간 안에서도 본인의 역할을 나눠 협업할 수 있었다는 것을 알 수 있었습니다.
"개발자" 역할을 수행하였습니다. 아직 100% 반영된 코드를 완성시키진 못했지만, 저희의 접근  방법은 다음과 같습니다.
`대략적인 각 코드의 역할 파악` -> `전체 코드의 궁극적인 목표` -> `코드를 타임라인을 통해 "액션", "계산", "데이터" 로 나누기` -> `코드에 반영` 입니다.
지금은 타임라인을 통해 "액션", "계산", "데이터"를 분리하는 과정에 있었습니다.

Lacked (내가 이런걸 못해서 아쉬웠다.)
지금까지는 없습니다. 시간이 단지 부족해서 아직 완성시키지 못했는데, 마저 마무리해서 반영하고 싶습니다.


Longed For (앞으로 해보고 싶은것, 기대되는 점)
"개발자" 역할에서 "액션", "계산", "데이터" 가 잘 분리된 전체 코드가, "테스터" 가 작성한 테스트 코드의 형태의 구애되지 않고 100% 커버가 되는 것을 확인할 수 있다면 뿌듯할 것 같습니다.
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

<br />


### 2️⃣ 주차

> 주제를 입력하세요.

<br />

<details>
<summary>👀 테오의 말말말</summary>

```ts
<2주차 스터디>

안녕하세요 테오입니다! 개인 사정으로 인해 스터디가 지연된 점 죄송스럽게 생각합니다. 그래서 회고와 다음 스터디 공지를 전하지 못했네요.
다음 스터디 범위는 ~230p 까지 입니다.

회고는 나중에 스터디가 끝났을때 나에게 무엇이 남았는지 알려주는 좋은 장치이므로 꼭 어제를 떠올리며 기록해주세요.
1주차에는 함수형 코딩의 핵심인 액션 - 계산 - 데이터라는 개념을 이해하고 왜 이렇게 하는 것이 좋은지 체험을 하는 시간이었습니다.
그리고 2주차에서는 "어떻게" 액션으로 부터 "계산"을 빼낼 수 있는지에 대해서 배워보고 한번 실습을 해보았습니다.

책에서는 액션에서 계산을 빼내는 작업은 암묵적인 입력과 암묵적인 출력을 명시적인 입력과 명시적인 출력으로 바꾸는 데 있다고 말합니다.

암묵적인 입력이라 함은, 함수인자가 아닌 형태로 사용되는 데이터 함수에서 선언한 데이터 등을 의미하며
암묵적인 출력이라 함은, 함수의 반환값이 아닌 출력 (DOM, console, 전역변수에 대입) 을 의미합니다.

1주차에서 느꼈을 함수를 테스트를 쉽게 하기 위해서는 함수가 반드시 반환값을 가져야 하며, 함수 내에서 사용되는 모든 데이터를 외부에서 주입이 가능해야 한다는 것을 느꼈을거에요.
그래서 이러한 암묵적인 입/출력을 "함수인자와 반환값으로 명시적인 입출력으로 바꾸는 것" 이 액션에서 계산을 빼내는 방법입니다.
그래서 우리는 다음과 같은 전략을 취해볼 수 있었습니다.

함수에 반환값이 없다면 반환값을 만든다. (대개 마지막에 쓰이고 있는 변수)
해당 값이 관련된 코드 조각을 모아 함수의 형태로 만든다.
함수내에서 사용되고 있는 모든 데이터를 함수의 인자에서 받을 수 있도록 리팩토링 한다.
끝으로 계산은 여러번 수행이 되어도 외부 세계에 아무런 영향을 끼쳐서는 안됩니다.
그렇기에 계산은 함수 외부의 값을 변경해서는 안됩니다.

그래서 전역변수의 값이나 객체 혹은 배열로 넘어온 인자의 값을 직접 수정하는 행위를 하지 말아야 합니다.
그러지 않기 위해서 값을 변경해야 하는 일이 발생한다면 해당 값을 복사해서 조작하여 반환하는 "카피온라이트", "방어적 복사" 라는 기법을 사용하게 됩니다.
그리고 이러한 방식은 ES6에서 spread operator [...arr], {...obj} 와 같은 문법적인 요소가 되었기에 적극적으로 사용해주시면 좋을 것 같아요.
어제 배웠던 그리고 실습했던 내용을 떠올려보면서 과제를 한번 잘 마무리 해보시길 바랍니다.

아울러 어제 추가로 말씀 드렸던 FE에서 함수형 사고<액션 - 계산 - 데이터>를 어떻게 적용을 하는지에 대해서도 다시 공유를 드릴게요.
수고하셨습니다 :미소짓는_얼굴:
회고랑 과제 그리고 스터디 잊지 마시고 즐거운 1주 되세요!!
```

```ts
<FE에서 함수형 코딩을 어떻게 적용하는가? 액션 - 계산 - 데이터>

우리는 함수형 코딩을 공부하면서 "계산(=순수함수)"을 좋은 코드로 취급하고 "계산"을 빼내는 법을 배우고 있지만,
그에 앞서 프로그램을 크게 액션 / 계산 / 데이터 라는 3가지의 체계로 나눠서 바라보고 관리하는 것이 우선이며,
액션과 데이터 역시 프로그램의 일부분이라는 것을 이해해야합니다.

우리가 개발하는 FE 프로그래밍에서는 액션과 데이터는 이벤트 핸들러와 전역상태로 이해하면 받아들이기 쉽습니다.
FE 개발은 데이터를 화면으로 그리고 화면을 보고 사용자가 어떤 행동을 하면 그 행동에 맞춰 기존 데이터를 변경하고 다시 화면에 반영하는 사이클로 만들어집니다.
(데이터 -> 화면 -> (사용자) -> 행동 -> 데이터' -> 화면' -> ...)

따라서 함수형 코드의 이론을 적용을 할 때,
요구사항을 사용자의 행동(이벤트 핸들러)으로 부터 시작해서 기존 데이터(명시적 입력)에서 새로운 데이터(명시적 출력)를 변경하는 로직을 "계산" 이라는 함수로 분리해서 그 결과를 다시 출력하는 단계를 생각하면 액션 -> 계산 -> 데이터 라는 함수형 코딩의 체계와 FE의 개발 체계를 매칭하는데 도움이 될거에요.
```

```ts
<테스트와 함수형 코딩과의 관계>

테스트 코드를 작성해보는 것을 스터디의 서브과제식으로 꼭 전달을 드리고 있는데 함수형 코딩 체계를 이해하면 테스트의 범주나 테스트에 대해서도 어렴풋이 이해를 할 수 있게 됩니다.
우리가 유닛 테스트라고 불리는 것들은 바로 "계산"을 검증하기 위함이라는 것을 알 수 있습니다.

유닛 테스트를 쉽게 하기 위해서는 여러가지 조건들을 쉽게 세팅이 가능해야 하고 같은 입력에 대해서는 같은 출력을 가져야 된다는 것을 알 수 있는데 이는 함수형 코딩의 계산(=순수함수)와의 정의와도 같습니다.
하지만 유닛테스트만으로는 모든 테스트를 할 수 없기 때문에 e2e 테스트라는 것을 하게 됩니다.

e2e 테스트는 함수형 코딩 체계에서는 액션을 테스트 하는 것으로 이해할 수 있습니다.
액션은 명확한 반환값도 조건을 세팅하기도 어렵기 때문에 테스트를 만들고 검증하기가 어렵습니다.

각 테스트의 구성과 전략들을 함수형 코딩 체계에 빗대어 한번 생각해보시면 재밌을 것 같아요~
```

</details>

<details>
<summary>👍 2주차 - 4LS</summary>

```ts
2주차 - 4LS

Like (좋았던 것)

지난 1주차 세션에서는 "개발자" 입장에서 액션이 가득한 코드에서 계산을 분리하는 것에 초점을 두고 개발을 했었습니다.
이번 2주차 세션에서는 "테스터" 입장에서 "계산" 을 테스트하는 측면도 생각해볼 수 있지만 더불어 테스트하기 힘들 수 있는 "액션" 에 대한 E2E테스트 코드를 작성해볼 수 있었던 점이 재밌었습니다.

Learnd (배운 것)

이번에 "테오" 의 피드백에서 크게 와닿았던 것 중에서 "테스트의 범주" 에 대해 이전보다 이해가 잘 된 것 같습니다.
제 기준에서 명확하게 정의내려진 것은 "계산" 에 대해서는 "유닛테스트" 를, "액션" 에 대해서는 "E2E테스트" 를 통해 테스트를 하게 된다는 점이 각인되었습니다.

Lacked (내가 이런걸 못해서 아쉬웠다.)

테오가 말씀해주신것처럼, E2E테스트는 방식에 따라서도 또는 상황에 따라서도 검증해야하는 방향성이 다를 수 있다고 생각합니다.
이러한 부분을 이해하고 좀 더 믿을 수 있는 테스트 코드가 어떤 형태인지 확신을 가지기 힘든데요. 
이 부분은 지금 단계에서는 충분히 그럴 수 있다고 받아들이고, 나날이 좀 더 좋은 "엑션" 에 대한 테스트 코드 방향성은 무엇인지 고민해보면서 본인만의 감을 익히는 것이 중요할 것 같습니다. 

Longed For (앞으로 해보고 싶은것, 기대되는 점)

지난 세션에서는 테스터가 "계산" 에 대한 유닛테스트를, 이번 세션에서는 테스터가 "액션" 에 대한 E2E테스트를 중심적으로 테스트를 준비했는데요.
차후 세션에서는 두 가지 테스트를 커버할 수 있는 테스터 입장에서의 코드를 고민해본다면 더 단단해질 것 같습니다.
```
</details>

<br />

`깨달은 점(실질적)`

+ 내용을 입력해주세요.


`깨달은 점(개념적)`

+ 내용을 입력해주세요.

`알게된 점(기타)`

+ 내용을 입력해주세요.

<br/>

---

<br />


### 3️⃣ 주차

> 주제를 입력하세요.

<br />

<details>
<summary>👀 테오의 말말말</summary>

```ts
<3주차 스터디>

안녕하세요 테오입니다!!

[목표 였던것]

어제는 함수형 사고에서 말하는 액션 / 계산 / 데이터 의 3가지 영역으로 나눠서 만들어진 함수들간의 계층을 시각화해보고
더 나은 구조에 대해서 생각하고 요구사항의 추가나 변화가 발생했을때 꼭 필요한 만큼의 추가/변화가 발생하는지 느껴보고
또 상상해서 계층을 만들어보고 설계가 없는 코드의 그림도 그려보고 전후를 비교해가며 좋은 구조란 어떻게 생겼는지 느끼고
그것을 시각적으로 머릿속에 정리할 수 있도록 하고자 했습니다.

함수와 변수 조각들의 계층 구조를 만들고 논의만 해보는 것만으로도 충분한 시간이 필요했기에 목표치에 준할 수 있도록 다음 시간에도
함수형 사고를 기반으로 하는 이 계층과 흐름 그리고 좋은 구조를 몸으로 이해하는 시간을 가져보려고 합니다.

아직 확신을 가질수는 없겠지만 맛을 본 것만으로도 충분할거라고 생각합니다.
이런게 있다는 것을 알았으니 여러분들은 이제 이따금씩 본인이 작성한 다른 코드들을 보면서도
한번씩 그림을 그려가며 구조를 파악해본다거나
나중에는 코드만 보아도 대략적으로 머릿속에 그림이 그려지는 단계가 될거에요!

[계층과 흐름에 관해서 보충 설명]

1. 일단 계층보다 흐름으로 먼저 생각해보자.

당연히 하루만의 실습으로 이걸 바로 이해하는 것은 어려웠을 거라고 생각을 합니다.
특히 계층을 나누는 방법이나 구조에 대해서 헷갈려하기에 조금 더 팁을 드리고자 합니다.

우선 계층을 먼저 나누고 접근을 하기 보다는 흐름을 먼저 생각해주세요.
특히 우리는 FE이기 때문에 사용자의 액션으로 부터 출발하면 쉽습니다.
우선 이벤트 핸들러로 부터 시작을 해보세요.

FE의 요구사항이란,

1) 사용자가 이러한 동작을 하면
2) 이러저러한 기존 데이터를 찾아서
3) 이러이러한 조건에 의해
4) 기존 데이터를 이렇게 가공주시고
5) 그 결과를 다시 사용자가 보기 편하게 바꿔서
6) 이러저러한 화면이 나오도록 해주세요.

의 큰 틀을 가지게 됩니다.

요구사항과 행동을 중심으로 화면으로 다시 되돌아오는 큰 흐름을 생각하며 함수들간의 순서를 잡아보고
함수 전과 후의 데이터들의 INPUT과 OUTPUT을 떠올려 보세요.

계산은 명시적 입출력이 있는 함수라면 액션은 암묵적 입출력이 있는 함수 입니다.
함수형 프로그래임 관점에서는 입력과 출력으로 이루어진 하나의 큰 함수가 존재하고 그 내부는 다시 INPUT과 OUTPUT이 연결되는 함수들의 파이프라인으로 구성이 된다고 생각합니다.
요구사항 = 사용자의 행동 ~~~> 최종 결과 화면 이라는 큰 흐름 속에서 어떠한 함수들을 거쳐가야 하는지를 우선 생각해보면 좋을 것 같아요.

2. 여러개의 큰 흐름을 그리다 보면 같은 계층의 함수 그룹을 발견할 수 있다!

이렇게 작성을 하다보면 성격과 역할이 비슷한 함수들을 찾을 수 있습니다.
흐름의 줄기가 크게 다르지 않기에 같은 흐름의 단계에 속하는 계산 함수들이 존재하기 때문입니다.
이런식으로 다시 배치를 하다보면 "흐름과 수직적으로 모이게 되는 계층을 발견" 할 수 있게 됩니다. 그리고 그 계층에 적절한 이름을 한번 고민해보시는 것도 좋을 것 같아요.

3. 계층이 세분화 되면 이후 코딩은 계층에 맞게 추가 할 수 있게 된다.

이렇게 계층에 대한 개념이 확립이 되고 나면 이후 새로운 요구사항들을 구현을 할 때, 요구사항 구현이 각 계층에 맞는 함수들이 떠오르고 조립을 하는 형식으로 작성할 수 있게 됩니다.
어떻게 만들어야 할지 하는 고민이 사라지고 일관성있고 이해하기 쉬운 컨벤션이 자연적으로 만들어지게 되는 것이죠!

===

이걸 확실히 이해하고 가는 것이 우리 함수형 코딩 스터디의 1부의 최종 목표이기에 꼭 한번 더 실습을 통해서 어떤 느낌인지는 느끼시고 가셨으면 좋겠습니다.
다음 만남까지는 2주가 남았네요. 그때까지 궁금한것들 아리까리한것들 편하게 물어보시고 올 연말 충만하게 보내시길 바랍니다.

```

</details>
<details>
<summary>👍 3주차 - 4LS</summary>

```ts
3주차 - 4LS

Like (좋았던 것)

어떤 시점에서는 코드작성을 잠시 멈추고, 다른 방식을 활용해서 특정 이슈에 대해 "토론" 중심으로 시간을 가져보는 것도 중요하다는 생각을 하게 되었습니다.
이번 주 분량이었던 책 범위에서 주로 언급되었던 "계층적 구조" 나 "추상화 벽" 과 같은 지식을 머리로는 이해한 듯 했지만, 막상 적용을 코드 단에서 생각해보려니 갑갑했습니다.
그런 걱정으로 이번 오프 세션을 참여했는데, 생각 외 방식으로 "Figjam" 과 같은 도구를 통해 토론 중심으로 좀 더 추상적인 관점에서 생각을 해보니 이해가 한 층 더 잘 된 느낌이었고 재밌었습니다.


Learnd (배운 것)

우리가 기존에 작성 코드를 이번 기회를 통해 계층적 구조로 변환해보면서, "데이터 - 계산 - 액션" 적인 측면이나 "명확한 레이어" 기반으로 함수를 잘 분리해놓아야 하는 중용성에 대해 더 많은 생각을 할 수 있게 되었습니다.
그만큼 현재 우리의 코드가 개선해야 할 부분도 많이 보인다는 생각을 하게 되었습니다.


Lacked (내가 이런걸 못해서 아쉬웠다.)

지난 세션에서 "테스터" 입장에서 테스트 코드를 중심적으로 코드를 다뤘습니다.
때문에 이번 세션에서는 "개발자" 입장에서 다른 두 분이 작성해주신 코드 기반으로 세션을 진행했습니다.
더 많은 의견을 드릴 수 있었을 것 같은데, 그러지 못했던 점에 대한 아쉬움이 있었습니다.


Longed For (앞으로 해보고 싶은것, 기대되는 점)

다음 주가 연말이다보니, 한 주 스터디가 쉬어가는 느낌이 들 수 있고 한편으론 손을 안대면 그 사이에 많이 지식이 사라질 수 있다고 생각합니다.
어느 정도 다음 세션까지 해야할 일들이 팀원들 사이에서 잘 정리된 것 같아서, 시간이 기존과 비교적 많이 주어졌기 때문에, 다양한 시도를 해보고 싶습니다.

ps. 이번 주도 고생 많으셨습니다 :)
```

</details>

<br />

`깨달은 점(실질적)`

+ 내용을 입력해주세요.


`깨달은 점(개념적)`

+ 내용을 입력해주세요.

`알게된 점(기타)`

+ 내용을 입력해주세요.

<br/>

---

