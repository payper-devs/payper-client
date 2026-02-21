import type { Nullable } from "./common";

/** 에러 상세 정보 */
export interface ExceptionDto {
  /** 에러 코드 (e.g. "USER-001") */
  code: string;
  /** 에러 메시지 */
  message: string;
}

/** 유효성 검증 에러 - 필드별 상세 정보 */
export interface FieldErrorDto {
  /** 에러가 발생한 필드명 */
  field: string;
  /** 해당 필드의 에러 메시지 */
  message: string;
}

/**
 * 서버 공통 API 응답 래퍼
 *
 * @example 성공 응답
 * { status: 200, data: { id: 1, name: "..." }, error: null }
 *
 * @example 에러 응답
 * { status: 404, data: null, error: { code: "USER-001", message: "User Not Found" } }
 *
 * @example 유효성 검증 에러 응답
 * { status: 400, data: [{ field: "email", message: "..." }], error: { code: "GEN-001", message: "Bad Request" } }
 */
export interface ApiResponse<T = unknown> {
  status: number;
  data: Nullable<T>;
  error: Nullable<ExceptionDto>;
}
