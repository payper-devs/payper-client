import type { Nullable } from "./common";

/**
 * 커서 기반 페이지네이션 메타 정보
 * 서버의 cursor-based pagination 응답에 공통으로 포함되는 필드
 */
export interface CursorPageMeta {
  nextCursor: Nullable<number>;
  hasNext: boolean;
}
