// utils/cn.js (hoặc file tương tự)

// Import hàm clsx từ thư viện 'clsx'
import { clsx } from "clsx";
// Import hàm twMerge từ thư viện 'tailwind-merge'
import { twMerge } from "tailwind-merge"

/**
 * @function cn
 * @description Kết hợp các chuỗi class (classname) và tự động giải quyết xung đột Tailwind CSS.
 * @param {...(string | string[] | Record<string, boolean> | null | undefined)} inputs - Các giá trị class để kết hợp.
 * @returns {string} Chuỗi class đã được gộp và tối ưu.
 * * Ví dụ: cn('p-4', 'bg-red-500', 'p-6', 'text-white')  =>  "bg-red-500 p-6 text-white"
 * (Lưu ý: 'p-6' ghi đè 'p-4')
 */
export function cn(...inputs) {
	// Dùng Tab để thụt lề
	// 1. clsx(inputs): Gộp tất cả các inputs thành một chuỗi class duy nhất,
	//    xử lý các giá trị boolean, mảng, và undefined/null.
	// 2. twMerge(...): Nhận chuỗi class từ clsx và tự động gộp, đồng thời loại bỏ/ghi đè
	//    các class bị xung đột (ví dụ: padding-4 và padding-6).
	return twMerge(clsx(inputs));
}