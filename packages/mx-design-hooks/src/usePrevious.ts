import { useEffect, useRef } from 'react';

/**
 * @zh 缓存上一次的 state 用于前后比较
 * @en Caching the last state is used for comparison
 */
export function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
