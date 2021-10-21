# newbie-shoppingmall-jieun

백엔드 온보딩 프로젝트 - 쇼핑몰

# 요구 사항

- [x] 쇼핑몰과 관련된 웹서비스를 개발한다고 가정합니다.
- [x] Express.js, Mongodb, Redis를 이용해서 웹 서비스를 개발합니다.
- [x] Mongodb, Redis는 Docker를 이용합니다.
- [ ] 서버 세션과 캐시는 Redis를 이용합니다.
- [x] 비지니스 로직과 인터페이스(express routes)는 분리해서 코드를 작성합니다.
- [x] 모든 비지니스 로직에 대해서 테스트 케이스를 작성합니다.
- [ ] 회원가입, 로그인, 로그아웃, 회원탈퇴 API를 개발합니다.
- [ ] 로그인 인증과 관련된 부분은 JWT(json web token)를 이용합니다.
- [ ] 비밀번호 연속 5회 이상 틀렸을 때 5분간 로그인이 안되게 합니다.(세션 이용)
- [ ] 로그인, 로그아웃은 데이버베이스에 이력을 남깁니다.

* 아래 요구사항은 온보딩 일정 상 개발하지 않습니다.

- [ ] 쇼핑몰에 필요한 API를 개발한다고 가정합니다 API는 다음과 같습니다.
- [ ] 쇼핑몰 아이템보기, 장바구니에 아이템 담기, 장바구니에서 아이템 삭제, 나의 장바구니 리스트 보기
- [ ] 로그인을 하지 않아도 쇼핑몰 아이템의 리스트를 볼 수 있습니다.
- [ ] 쇼핑몰 아이템의 리스트는 5분간 캐시합니다.
- [ ] 나의 장바구니 리스트도 5분간 캐시를 합니다, 단 아이템 담기와 아이템 삭제 시 해당 캐시를 제거합니다.
- [ ] 캐시가 성공적으로 되었다면 Response Header에 X-Cache: True로 표시합니다.
- [ ] 장바구니에 아이템 담기, 장바구니에서 아이템 삭제, 나의 장바구니 리스트보기는 로그인한 사람만 할 수 있습니다.
- [ ] 데이터베이스 검색과 관련된 부분은 index를 적용하여 검색 속도를 향상시킵니다.
- [ ] 모든 API는 Swagger로 문서화 합니다.
