# Chronos Convert - API & Button Functional Mapping

이 문서는 `Chronos Convert` 프로젝트의 모든 인터랙티브 요소와 백엔드 API 설계 시 필요한 엔드포인트를 정의합니다. 본 애플리케이션은 기본적으로 **Local WASM(WebAssembly)** 기반으로 동작하지만, 비즈니스 로직 확장 및 관리를 위해 다음과 같은 백엔드 연동이 필요합니다.

---

## 1. 내비게이션 및 상태 제어 (Navigation & State)

| 버튼 위치 | 버튼 이름 | 현재 프론트엔드 동작 | 백엔드 API 필요성 | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| Header | **CHRONOS CONVERT (Logo)** | `IDLE` 상태로 리셋 | - | 클라이언트 사이드 라우팅 |
| Header | **Technology** | `TECH` 페이지로 이동 | - | 정적 콘텐츠 |
| Header | **Privacy** | `PRIVACY` 페이지로 이동 | - | 정적 콘텐츠 |
| Header | **Enterprise** | `ENTERPRISE` 페이지로 이동 | - | 서비스 소개 |

---

## 2. 파일 처리 로직 (File Processing)

본 서비스의 핵심은 **브라우저 로컬 처리**입니다.

| 버튼 위치 | 버튼 이름 | 현재 프론트엔드 동작 | 백엔드 API 필요성 (엔드포인트) | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| DropZone | **파일 선택/드롭** | 파일 로드 및 `PROCESSING` 시작 | `GET /api/v1/wasm/module` | 최신 WASM 엔진 다운로드 시 필요 |
| Results | **Download All (ZIP)** | 생성된 모든 파일 압축 | - | 클라이언트 사이드 JSZip 활용 권장 |
| Results | **Download Now (개별)** | 특정 포맷 파일 다운로드 | - | 로컬 Blob 객체 다운로드 |

---

## 3. 외부 연동 및 비즈니스 데이터 (External API)

실제 백엔드 서버 구축 시 가장 우선적으로 구현해야 할 엔드포인트입니다.

### 3.1 기업용 서비스 및 리드 생성
*   **버튼:** `EnterpriseView.tsx` -> **Request Early Access**
*   **동작:** 사용자 정보 수집 및 대기열 등록
*   **API 엔드포인트:** `POST /api/v1/enterprise/waitlist`
*   **Payload 예시:**
    ```json
    {
      "email": "user@company.com",
      "company": "Company Name",
      "use_case": "Bulk processing"
    }
    ```

### 3.2 보안 백서 및 문서 다운로드
*   **버튼:** `PrivacyView.tsx` -> **Read Security Whitepaper →**
*   **동작:** 최신 보안 백서 PDF 열람
*   **API 엔드포인트:** `GET /api/v1/docs/whitepaper`

### 3.3 사용자 인터랙션 분석 (Privacy-Friendly)
*   **동작:** 페이지 뷰 및 전환 성공률 측정 (PrivacyView에 명시된 대로 비식별 데이터만 수집)
*   **API 엔드포인트:** `POST /api/v1/analytics/event`
*   **Payload 예시:**
    ```json
    {
      "event": "conversion_complete",
      "format": "pdf",
      "is_local": true
    }
    ```

---

## 4. 백엔드 설계 고려 사항 (Local-First Architecture)

1.  **CORS 설정:** 브라우저에서 직접 API를 호출하므로 적절한 CORS(Cross-Origin Resource Sharing) 설정이 필요합니다.
2.  **Stateless:** 파일 원본 데이터는 서버로 전송되지 않으므로, API는 메타데이터와 사용자 요청 처리에 집중해야 합니다.
3.  **WASM 배포:** 백엔드는 대용량 WASM 바이너리 파일을 효율적으로 서빙하기 위해 CDN 또는 Gzip/Brotli 압축이 적용된 엔드포인트를 제공해야 합니다.
