import '@testing-library/jest-native/extend-expect'
import { vi } from 'vitest'
import { server } from './mocks/server'

// RN Animated 에러 방지
vi.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// MSW lifecycle
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

