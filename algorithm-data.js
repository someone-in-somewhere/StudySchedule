// Algorithm Course Data - 105 topics
const algorithmCourseData = [
    {
        id: 1, chapter: 1, title: "Giới thiệu về Thuật toán",
        detail: `• Khái niệm thuật toán
• Đặc trưng của thuật toán
• Biểu diễn thuật toán
• Vai trò của thuật toán trong tin học`,
        book: "CLRS Ch1, Chuyên Tin Q1 - CD1, Giải thuật P2 §1",
        prerequisite: "Không",
        related: "Kiến thức lập trình cơ bản (Pascal/C++/Python)",
        hours: "3-4",
        note: "Nền tảng quan trọng. Hiểu rõ định nghĩa và ý nghĩa trước khi học sâu"
    },
    {
        id: 2, chapter: 1, title: "Phân tích thuật toán cơ bản",
        detail: `• Thời gian chạy thuật toán
• Best case, Worst case, Average case
• Insertion Sort
• Merge Sort
• Phân tích divide-and-conquer`,
        book: "CLRS Ch2, Chuyên Tin Q1 - CD1, Giải thuật P2 §2",
        prerequisite: "Nội dung 1",
        related: "Toán rời rạc, Giải tích cơ bản",
        hours: "4-6",
        note: "Học kỹ 2 thuật toán sắp xếp đầu tiên. Code và test"
    },
    {
        id: 3, chapter: 1, title: "Ký hiệu tiệm cận và Độ phức tạp",
        detail: `• Big-O, Big-Omega, Big-Theta
• Tốc độ tăng trưởng
• So sánh độ phức tạp
• Các quy tắc tính toán`,
        book: "CLRS Ch3, Chuyên Tin Q1 - CD1, Giải thuật P2 §2",
        prerequisite: "Nội dung 2",
        related: "Giới hạn hàm số, Logarit và lũy thừa",
        hours: "5-6",
        note: "Cực kỳ quan trọng! Dùng xuyên suốt khóa học"
    },
    {
        id: 4, chapter: 1, title: "Chia để trị (Divide-and-Conquer)",
        detail: `• Phương pháp chia để trị
• Phương trình truy hồi
• Định lý Master
• Maximum subarray
• Nhân ma trận Strassen`,
        book: "CLRS Ch4, Chuyên Tin Q1, Giải thuật P2 §3",
        prerequisite: "Nội dung 2, 3",
        related: "Đệ quy, Phương trình sai phân",
        hours: "6-8",
        note: "Làm nhiều bài tập về recurrence. Học thuộc Master Theorem"
    },
    {
        id: 5, chapter: 1, title: "Phân tích xác suất và Thuật toán ngẫu nhiên",
        detail: `• Không gian xác suất
• Biến ngẫu nhiên
• Giá trị kỳ vọng
• Randomized QuickSort
• Hash functions`,
        book: "CLRS Ch5",
        prerequisite: "Nội dung 3",
        related: "Xác suất thống kê cơ bản",
        hours: "4-5",
        note: "Tùy chọn học sau nếu chưa có nền tảng xác suất"
    },
    {
        id: 6, chapter: 2, title: "Đại số tổ hợp cơ bản",
        detail: `• Chỉnh hợp lặp và không lặp
• Hoán vị
• Tổ hợp
• Nguyên lý Dirichlet
• Nguyên lý bao hàm và loại trừ`,
        book: "Giải thuật P1 §1, Chuyên Tin Q1",
        prerequisite: "Không",
        related: "Toán rời rạc",
        hours: "3-4",
        note: "Nền tảng cho bài toán liệt kê. Học lý thuyết trước khi code"
    },
    {
        id: 7, chapter: 2, title: "🆕 Số học cơ bản và Modular Arithmetic",
        detail: `• GCD, LCM (Euclid)
• Modular arithmetic
• Modular inverse (Extended Euclid)
• Fast exponentiation (a^b mod m)
• Sieve of Eratosthenes
• Prime factorization
• Chinese Remainder Theorem`,
        book: "CLRS Ch31.1-31.3, Chuyên Tin Q2, Competitive Programming resources",
        prerequisite: "Nội dung 6",
        related: "Number theory cơ bản, Đệ quy",
        hours: "5-6",
        note: "QUAN TRỌNG! Cần cho DP, Hashing, Cryptography. Học sớm để dùng nhiều"
    },
    {
        id: 8, chapter: 2, title: "🆕 Bit Manipulation",
        detail: `• Bitwise operators: AND, OR, XOR, NOT, Shift
• Bit tricks: count bits, check power of 2, swap
• Bitmask DP
• Subset enumeration using bitmask
• XOR properties
• Gray code`,
        book: "Competitive Programming resources, Chuyên Tin Q2",
        prerequisite: "Nội dung 6, 7",
        related: "Binary number system",
        hours: "4-5",
        note: "Kỹ thuật CỰC QUAN TRỌNG cho CP! Làm 20+ bài về bitmask"
    },
    {
        id: 9, chapter: 2, title: "Phương pháp sinh (Generation)",
        detail: `• Sinh dãy nhị phân
• Sinh tổ hợp chập k
• Sinh hoán vị
• Kỹ thuật sinh từ cấu hình cuối`,
        book: "Giải thuật P1 §2, Chuyên Tin Q1",
        prerequisite: "Nội dung 6",
        related: "Cấu trúc dữ liệu mảng",
        hours: "5-6",
        note: "Code từng thuật toán sinh. Hiểu cách sinh cấu hình kế tiếp"
    },
    {
        id: 10, chapter: 2, title: "Thuật toán Quay lui (Backtracking)",
        detail: `• Nguyên lý quay lui
• Không gian trạng thái
• Bài toán 8 quân hậu
• Bài toán phân tích số
• Bài toán tô màu đồ thị`,
        book: "Giải thuật P1 §3, Chuyên Tin Q1, Q2",
        prerequisite: "Nội dung 9",
        related: "Đệ quy, Cây quyết định",
        hours: "6-8",
        note: "Học kỹ! Dùng nhiều trong Olympic. Làm 10-15 bài tập"
    },
    {
        id: 11, chapter: 2, title: "🆕 Meet in the Middle",
        detail: `• Chia không gian tìm kiếm làm 2
• Two-sided search
• Subset sum with Meet in the Middle
• 4Sum problem
• Reduce từ O(2^n) xuống O(2^(n/2))`,
        book: "Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 10",
        related: "Hash table, Binary search",
        hours: "4-5",
        note: "Tối ưu exponential search. Kỹ thuật thông minh!"
    },
    {
        id: 12, chapter: 2, title: "Kỹ thuật Nhánh cận (Branch and Bound)",
        detail: `• Nguyên lý nhánh cận
• Hàm giới hạn
• Bài toán người du lịch (TSP)
• Bài toán cái túi
• So sánh với Backtracking`,
        book: "Giải thuật P1 §4, Chuyên Tin Q2",
        prerequisite: "Nội dung 10",
        related: "Bài toán tối ưu, Thuật toán tham lam",
        hours: "6-7",
        note: "Tối ưu hóa Backtracking. Học sau khi vững quay lui"
    },
    {
        id: 13, chapter: 2, title: "Đệ quy và Giải thuật đệ quy",
        detail: `• Khái niệm đệ quy
• Đệ quy đuôi
• Phân tích độ phức tạp đệ quy
• Fibonacci, Factorial, GCD
• Towers of Hanoi
• Đệ quy vs Vòng lặp`,
        book: "Giải thuật P2 §3, CLRS Ch4, Chuyên Tin Q1",
        prerequisite: "Nội dung 4",
        related: "Stack và call stack",
        hours: "5-6",
        note: "Vẽ call tree để hiểu rõ. Quan trọng cho DP sau này"
    },
    {
        id: 14, chapter: 3, title: "Heapsort và Heap",
        detail: `• Cấu trúc heap
• Max-heap, Min-heap
• Heapify
• Build-heap
• Heapsort
• Priority queue`,
        book: "CLRS Ch6, Giải thuật P2 §8.7, Chuyên Tin Q1",
        prerequisite: "Nội dung 3",
        related: "Cây nhị phân, Mảng",
        hours: "5-6",
        note: "Heap rất quan trọng! Dùng nhiều trong các thuật toán khác"
    },
    {
        id: 15, chapter: 3, title: "Quicksort",
        detail: `• Phân hoạch (Partition)
• Quicksort thuật toán
• Randomized Quicksort
• Phân tích worst/average case
• Quicksort vs Merge Sort`,
        book: "CLRS Ch7, Giải thuật P2 §8.6, Chuyên Tin Q1",
        prerequisite: "Nội dung 4",
        related: "Chia để trị",
        hours: "4-5",
        note: "Thuật toán sắp xếp thực tế nhất. Code và tối ưu"
    },
    {
        id: 16, chapter: 3, title: "Sắp xếp trong thời gian tuyến tính",
        detail: `• Counting Sort
• Radix Sort
• Bucket Sort
• Giới hạn O(n log n)
• Khi nào dùng linear sorting`,
        book: "CLRS Ch8, Giải thuật P2 §8.8, 8.10, Chuyên Tin Q1",
        prerequisite: "Nội dung 14, 15",
        related: "Hash table",
        hours: "4-5",
        note: "Chỉ áp dụng với điều kiện đặc biệt về dữ liệu"
    },
    {
        id: 17, chapter: 3, title: "Tổng hợp các thuật toán Sắp xếp",
        detail: `• Selection Sort
• Bubble Sort
• Insertion Sort
• Shell Sort
• Merge Sort
• So sánh và đánh giá
• Tính ổn định`,
        book: "Giải thuật P2 §8 (toàn bộ), CLRS Ch2, 6, 7, 8, Chuyên Tin Q1",
        prerequisite: "Nội dung 14, 15, 16",
        related: "Độ phức tạp thuật toán",
        hours: "8-10",
        note: "Học hết các thuật toán. Làm bảng so sánh chi tiết"
    },
    {
        id: 18, chapter: 3, title: "Thống kê thứ tự (Order Statistics)",
        detail: `• Minimum và Maximum
• Selection trong thời gian kỳ vọng tuyến tính
• Selection trong thời gian tuyến tính worst-case
• Tìm trung vị
• Tìm phần tử thứ k`,
        book: "CLRS Ch9, Chuyên Tin Q1",
        prerequisite: "Nội dung 15",
        related: "Quicksort partition",
        hours: "4-5",
        note: "Ứng dụng partition của Quicksort. Thuật toán thông minh"
    },
    {
        id: 19, chapter: 4, title: "Cấu trúc dữ liệu cơ bản",
        detail: `• Stack (Ngăn xếp)
• Queue (Hàng đợi)
• Linked List (Danh sách liên kết)
• Doubly Linked List
• Circular List`,
        book: "CLRS Ch10, Giải thuật P2 §4, §5, Chuyên Tin Q1",
        prerequisite: "Không",
        related: "Con trỏ (Pointer), Cấp phát động",
        hours: "5-6",
        note: "Nền tảng CTDL. Phải code và test kỹ từng loại"
    },
    {
        id: 20, chapter: 4, title: "Hash Tables",
        detail: `• Direct-address tables
• Hash functions
• Collision resolution: Chaining
• Collision resolution: Open addressing
• Universal hashing
• Perfect hashing`,
        book: "CLRS Ch11, Giải thuật P2 §9.5, Chuyên Tin Q1",
        prerequisite: "Nội dung 5, 19",
        related: "Linked list",
        hours: "5-6",
        note: "Quan trọng cho lookup O(1). Học kỹ các phương pháp xử lý collision"
    },
    {
        id: 21, chapter: 4, title: "Tìm kiếm cơ bản",
        detail: `• Tìm kiếm tuần tự
• Tìm kiếm nhị phân
• Interpolation search
• Jump search
• Exponential search`,
        book: "Giải thuật P2 §9.1, 9.2, 9.3, CLRS Ch2, Chuyên Tin Q1",
        prerequisite: "Nội dung 17",
        related: "Mảng đã sắp xếp",
        hours: "4-5",
        note: "Tìm kiếm nhị phân cực kỳ quan trọng! Phải thuộc"
    },
    {
        id: 22, chapter: 4, title: "🆕 Two Pointers Technique",
        detail: `• Two pointers pattern
• Same direction pointers
• Opposite direction pointers
• Fast and slow pointers
• Ứng dụng: 2Sum, 3Sum, Remove duplicates
• Container with most water
• Trapping rain water`,
        book: "LeetCode patterns, Competitive Programming resources",
        prerequisite: "Nội dung 21",
        related: "Sorted arrays, Linked list",
        hours: "4-5",
        note: "Pattern CỰC KỲ PHỔ BIẾN trong interviews! Làm 15-20 bài"
    },
    {
        id: 23, chapter: 4, title: "🆕 Sliding Window",
        detail: `• Fixed-size window
• Variable-size window
• Maximum/Minimum in sliding window
• Substring problems
• Longest substring without repeating
• Monotonic queue trong sliding window`,
        book: "LeetCode patterns, Competitive Programming resources",
        prerequisite: "Nội dung 22",
        related: "Hash table, Deque",
        hours: "5-6",
        note: "Pattern quan trọng cho array/string. Làm 15-20 bài"
    },
    {
        id: 24, chapter: 4, title: "🆕 Binary Search nâng cao",
        detail: `• Binary search on answer
• Minimize/Maximize với Binary Search
• Ternary Search
• First/Last occurrence
• Search in rotated array
• Median of two sorted arrays`,
        book: "CLRS Ch9, Competitive Programming resources",
        prerequisite: "Nội dung 21",
        related: "Binary search cơ bản",
        hours: "5-6",
        note: "Kỹ thuật tối ưu RẤT HAY! Khó nhận biết khi nào dùng"
    },
    {
        id: 25, chapter: 5, title: "Cây (Tree) - Khái niệm cơ bản",
        detail: `• Định nghĩa cây
• Cây nhị phân
• Cây K-phân
• Cây tổng quát
• Biểu diễn cây
• Các thuật ngữ: node, cạnh, độ cao, độ sâu`,
        book: "Giải thuật P2 §6.1-6.3, CLRS Ch10, Chuyên Tin Q1",
        prerequisite: "Nội dung 19",
        related: "Đệ quy",
        hours: "5-6",
        note: "Nền tảng cho tất cả CTDL dạng cây. Vẽ hình để hiểu"
    },
    {
        id: 26, chapter: 5, title: "Duyệt cây (Tree Traversal)",
        detail: `• Duyệt theo thứ tự trước (Preorder)
• Duyệt theo thứ tự giữa (Inorder)
• Duyệt theo thứ tự sau (Postorder)
• Duyệt theo mức (Level-order/BFS)
• Ứng dụng của mỗi phép duyệt`,
        book: "Giải thuật P2 §6.4, CLRS Ch10, 12, Chuyên Tin Q1",
        prerequisite: "Nội dung 25",
        related: "Stack, Queue, Đệ quy",
        hours: "4-5",
        note: "Học thuộc 4 phép duyệt. Code cả đệ quy và vòng lặp"
    },
    {
        id: 27, chapter: 5, title: "🆕 Monotonic Stack và Queue",
        detail: `• Monotonic stack pattern
• Next Greater Element (NGE)
• Next Smaller Element
• Monotonic queue
• Largest Rectangle in Histogram
• Trapping rain water 2D`,
        book: "LeetCode patterns, Competitive Programming resources",
        prerequisite: "Nội dung 19, 26",
        related: "Stack, Queue, Array",
        hours: "5-6",
        note: "Pattern quan trọng! Dùng stack/queue theo cách đặc biệt"
    },
    {
        id: 28, chapter: 5, title: "Ký pháp biểu thức",
        detail: `• Ký pháp tiền tố (Prefix)
• Ký pháp trung tố (Infix)
• Ký pháp hậu tố (Postfix)
• Chuyển đổi giữa các ký pháp
• Tính giá trị biểu thức
• Xây dựng cây biểu thức`,
        book: "Giải thuật P2 §7, Chuyên Tin Q1",
        prerequisite: "Nội dung 19, 26",
        related: "Stack, Cây nhị phân biểu thức",
        hours: "5-6",
        note: "Ứng dụng thực tế của Stack và Tree. Làm bài compiler"
    },
    {
        id: 29, chapter: 5, title: "Binary Search Tree (BST)",
        detail: `• Tính chất BST
• Search, Insert, Delete
• Minimum, Maximum
• Successor, Predecessor
• Phân tích độ phức tạp
• Cây suy biến`,
        book: "CLRS Ch12, Giải thuật P2 §9.4, Chuyên Tin Q1",
        prerequisite: "Nội dung 25, 26",
        related: "Binary search, Inorder traversal",
        hours: "6-7",
        note: "CTDL cực quan trọng! Cơ sở cho các cây cân bằng"
    },
    {
        id: 30, chapter: 5, title: "Red-Black Trees",
        detail: `• Tính chất Red-Black Trees
• Rotations
• Insertion
• Deletion
• Phân tích độ cao
• So sánh với BST thường`,
        book: "CLRS Ch13, Chuyên Tin Q2",
        prerequisite: "Nội dung 29",
        related: "AVL Trees, 2-3-4 Trees",
        hours: "8-10",
        note: "Khó! Học từ từ. Vẽ hình minh họa từng thao tác"
    },
    {
        id: 31, chapter: 5, title: "Augmenting Data Structures",
        detail: `• Mở rộng CTDL
• Dynamic order statistics
• Interval trees
• Methodology cho augmentation`,
        book: "CLRS Ch14, Chuyên Tin Q2",
        prerequisite: "Nội dung 30",
        related: "Segment trees",
        hours: "5-6",
        note: "Kỹ thuật mở rộng CTDL để giải quyết bài toán đặc biệt"
    },
    {
        id: 32, chapter: 5, title: "🆕 Segment Tree",
        detail: `• Segment tree structure
• Build, Query, Update
• Range queries: sum, min, max, GCD
• Lazy propagation
• Persistent segment tree
• 2D Segment Tree`,
        book: "CLRS Ch14, Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 31",
        related: "Tree, Recursion, Binary indexed tree",
        hours: "8-10",
        note: "CTDL CỰC QUAN TRỌNG cho CP! Học kỹ lazy propagation"
    },
    {
        id: 33, chapter: 5, title: "🆕 Binary Indexed Tree (Fenwick Tree)",
        detail: `• BIT structure và tính chất
• Point update, Range query
• Range update với difference array
• 2D BIT
• BIT vs Segment Tree
• Lower_bound trên BIT`,
        book: "Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 32",
        related: "Binary representation, Prefix sum",
        hours: "5-6",
        note: "Đơn giản hơn Segment Tree, code cực ngắn. QUAN TRỌNG!"
    },
    {
        id: 34, chapter: 5, title: "🆕 Square Root Decomposition",
        detail: `• Sqrt decomposition technique
• Block-based processing
• Mo's algorithm
• Ứng dụng: range queries
• So sánh với Segment Tree/BIT`,
        book: "Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 32",
        related: "Array, Math",
        hours: "4-5",
        note: "Kỹ thuật đơn giản nhưng mạnh. Khi không cần update nhiều"
    },
    {
        id: 35, chapter: 5, title: "Disjoint Sets (Union-Find)",
        detail: `• Linked-list representation
• Union by rank
• Path compression
• Phân tích độ phức tạp
• Ứng dụng: Kruskal MST`,
        book: "CLRS Ch21, Chuyên Tin Q2",
        prerequisite: "Nội dung 19",
        related: "Đồ thị",
        hours: "5-6",
        note: "Quan trọng cho thuật toán đồ thị. Code và tối ưu"
    },
    {
        id: 36, chapter: 5, title: "B-Trees (tùy chọn)",
        detail: `• Cấu trúc B-Tree
• Search, Insert, Delete
• Ứng dụng trong database
• B+ Trees`,
        book: "CLRS Ch18, Chuyên Tin Q3",
        prerequisite: "Nội dung 30",
        related: "Hệ quản trị CSDL",
        hours: "6-7",
        note: "Tùy chọn nâng cao. Quan trọng nếu học DBMS"
    },
    {
        id: 37, chapter: 5, title: "Fibonacci Heaps (tùy chọn)",
        detail: `• Cấu trúc Fibonacci Heap
• Lazy evaluation
• Các thao tác
• Phân tích amortized
• Ứng dụng: Dijkstra, Prim`,
        book: "CLRS Ch19, Chuyên Tin Q3",
        prerequisite: "Nội dung 14, 31",
        related: "Amortized analysis",
        hours: "7-8",
        note: "Nâng cao. Chỉ học khi cần optimize Dijkstra/Prim"
    },
    {
        id: 38, chapter: 6, title: "Quy hoạch động - Giới thiệu",
        detail: `• Nguyên lý quy hoạch động
• Optimal substructure
• Overlapping subproblems
• Memoization vs Tabulation
• Top-down vs Bottom-up`,
        book: "Giải thuật P3 §1, §2, CLRS Ch15 (intro), Chuyên Tin Q2",
        prerequisite: "Nội dung 13",
        related: "Đệ quy, Công thức truy hồi",
        hours: "6-8",
        note: "Quan trọng nhất! Học kỹ nguyên lý trước khi làm bài"
    },
    {
        id: 39, chapter: 6, title: "DP - Rod Cutting",
        detail: `• Bài toán cắt thanh
• Công thức đệ quy
• Top-down with memoization
• Bottom-up solution
• Reconstructing solution`,
        book: "CLRS Ch15.1, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "Bài toán tối ưu",
        hours: "3-4",
        note: "Bài DP đầu tiên. Hiểu kỹ từng bước"
    },
    {
        id: 40, chapter: 6, title: "DP - Matrix Chain Multiplication",
        detail: `• Bài toán nhân dãy ma trận
• Optimal parenthesization
• Bảng phụ thuộc
• Reconstruction`,
        book: "CLRS Ch15.2, Giải thuật P3 §3.5, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "Ma trận",
        hours: "4-5",
        note: "DP 2 chiều. Vẽ bảng để hiểu dependencies"
    },
    {
        id: 41, chapter: 6, title: "DP - Longest Common Subsequence (LCS)",
        detail: `• Dãy con chung dài nhất
• Công thức quy hoạch
• Tái tạo dãy con
• Ứng dụng: diff, DNA matching`,
        book: "CLRS Ch15.4, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "String algorithms",
        hours: "4-5",
        note: "Bài LCS kinh điển. Nhiều ứng dụng thực tế"
    },
    {
        id: 42, chapter: 6, title: "DP - Longest Increasing Subsequence (LIS)",
        detail: `• Dãy con tăng dài nhất
• DP O(n²)
• Binary search optimization O(n log n)
• Patience sorting
• Ứng dụng`,
        book: "Giải thuật P3 §3.1, Chuyên Tin Q2",
        prerequisite: "Nội dung 38, 21",
        related: "Binary search",
        hours: "5-6",
        note: "Bài LIS xuất hiện nhiều trong contests. Code cả 2 cách"
    },
    {
        id: 43, chapter: 6, title: "DP - Knapsack Problem",
        detail: `• 0/1 Knapsack
• Unbounded Knapsack
• Fractional Knapsack (Greedy)
• Bounded Knapsack
• Multiple Knapsack`,
        book: "Giải thuật P3 §3.2, CLRS Ch16, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "Greedy algorithms",
        hours: "6-7",
        note: "Bài toán kinh điển. Học hết các biến thể"
    },
    {
        id: 44, chapter: 6, title: "DP - Edit Distance",
        detail: `• Biến đổi xâu
• Levenshtein distance
• Các thao tác: insert, delete, replace
• Ứng dụng: spell checker`,
        book: "Giải thuật P3 §3.3, CLRS Ch15, Chuyên Tin Q2",
        prerequisite: "Nội dung 41",
        related: "String processing",
        hours: "4-5",
        note: "Ứng dụng rất nhiều trong NLP và text processing"
    },
    {
        id: 45, chapter: 6, title: "🆕 Prefix Sum và Difference Array",
        detail: `• 1D Prefix Sum
• 2D Prefix Sum (Matrix)
• Range sum queries O(1)
• Difference array technique
• Range update O(1)
• Ứng dụng trong DP`,
        book: "Competitive Programming resources, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "Array, Math",
        hours: "4-5",
        note: "Kỹ thuật tối ưu CỰC HAY! Dùng nhiều trong DP và queries"
    },
    {
        id: 46, chapter: 6, title: "DP - Các bài toán khác",
        detail: `• Coin change
• Subset sum
• Partition problem
• Dãy con có tổng chia hết cho K
• Max sum subarray (Kadane)
• Matrix chain ordering`,
        book: "Giải thuật P3 §3.4, 3.6, CLRS Ch15, Chuyên Tin Q2",
        prerequisite: "Nội dung 38-45",
        related: "Number theory",
        hours: "10-12",
        note: "Làm nhiều bài tập DP. Practice makes perfect!"
    },
    {
        id: 47, chapter: 6, title: "🆕 Combinatorics nâng cao",
        detail: `• Pascal's Triangle
• Catalan numbers
• Inclusion-Exclusion principle
• Stirling numbers
• Partition numbers
• Burnside's lemma`,
        book: "CLRS Ch5, Chuyên Tin Q3, Competitive Programming resources",
        prerequisite: "Nội dung 6, 7",
        related: "DP, Number theory",
        hours: "6-7",
        note: "Quan trọng cho bài toán đếm. Kết hợp với DP"
    },
    {
        id: 48, chapter: 6, title: "Thuật toán Tham lam (Greedy)",
        detail: `• Nguyên lý Greedy
• Greedy-choice property
• Optimal substructure
• Activity selection
• Huffman coding
• So sánh Greedy vs DP`,
        book: "CLRS Ch16, Chuyên Tin Q2",
        prerequisite: "Nội dung 38",
        related: "Chứng minh tính đúng đắn",
        hours: "6-8",
        note: "Khó nhận biết khi nào dùng Greedy. Làm nhiều bài"
    },
    {
        id: 49, chapter: 6, title: "Amortized Analysis (tùy chọn)",
        detail: `• Aggregate analysis
• Accounting method
• Potential method
• Ví dụ: Dynamic arrays, Splay trees`,
        book: "CLRS Ch17, Chuyên Tin Q3",
        prerequisite: "Nội dung 3",
        related: "Độ phức tạp thuật toán",
        hours: "6-7",
        note: "Nâng cao. Dùng để phân tích CTDL phức tạp"
    },
    {
        id: 50, chapter: 7, title: "Đồ thị - Khái niệm cơ bản",
        detail: `• Định nghĩa đồ thị
• Đồ thị có hướng/vô hướng
• Đường đi, chu trình
• Đồ thị liên thông
• Các loại đồ thị đặc biệt`,
        book: "Giải thuật P4 §1, CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Không",
        related: "Set theory",
        hours: "3-4",
        note: "Nền tảng lý thuyết đồ thị. Vẽ nhiều ví dụ"
    },
    {
        id: 51, chapter: 7, title: "Biểu diễn đồ thị",
        detail: `• Ma trận kề (Adjacency Matrix)
• Danh sách kề (Adjacency List)
• Danh sách cạnh (Edge List)
• So sánh ưu nhược điểm
• Chọn biểu diễn phù hợp`,
        book: "Giải thuật P4 §2, CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Nội dung 50",
        related: "Mảng, Linked list",
        hours: "3-4",
        note: "Quan trọng! Chọn sai biểu diễn sẽ chậm"
    },
    {
        id: 52, chapter: 7, title: "Breadth-First Search (BFS)",
        detail: `• Thuật toán BFS
• Queue trong BFS
• Shortest path trong unweighted graph
• Cây BFS
• Ứng dụng`,
        book: "Giải thuật P4 §3.3, CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Nội dung 19, 51",
        related: "Queue",
        hours: "5-6",
        note: "Thuật toán cơ bản nhất về đồ thị. Code cẩn thận"
    },
    {
        id: 53, chapter: 7, title: "Depth-First Search (DFS)",
        detail: `• Thuật toán DFS
• Stack trong DFS
• Timestamps (discovery/finish)
• Phân loại cạnh
• Ứng dụng`,
        book: "Giải thuật P4 §3.2, CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Nội dung 19, 51",
        related: "Stack, Đệ quy",
        hours: "5-6",
        note: "Quan trọng như BFS. Nhiều ứng dụng hơn"
    },
    {
        id: 54, chapter: 7, title: "Topological Sort",
        detail: `• Sắp xếp tôpô
• DFS-based algorithm
• Kahn's algorithm (BFS)
• Kiểm tra DAG
• Ứng dụng: dependency resolution`,
        book: "CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Nội dung 53",
        related: "DFS",
        hours: "4-5",
        note: "Chỉ áp dụng cho DAG. Quan trọng trong scheduling"
    },
    {
        id: 55, chapter: 7, title: "Strongly Connected Components (SCC)",
        detail: `• Định nghĩa SCC
• Kosaraju's algorithm
• Tarjan's algorithm
• Component graph
• Ứng dụng`,
        book: "CLRS Ch20, Chuyên Tin Q2",
        prerequisite: "Nội dung 53",
        related: "DFS",
        hours: "5-6",
        note: "Nâng cao. Dùng DFS 2 lần (Kosaraju)"
    },
    {
        id: 56, chapter: 7, title: "🆕 Lowest Common Ancestor (LCA)",
        detail: `• LCA problem
• Binary lifting
• Euler tour + RMQ
• Sparse table
• Applications trong tree problems
• Distance queries trên tree`,
        book: "CLRS Ch14, Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 29, 32",
        related: "Tree, Binary lifting, Segment Tree",
        hours: "6-7",
        note: "Kỹ thuật quan trọng cho tree algorithms! Học binary lifting"
    },
    {
        id: 57, chapter: 7, title: "🆕 Heavy-Light Decomposition (tùy chọn)",
        detail: `• Tree decomposition
• Heavy and light edges
• Path queries on trees O(log² n)
• Subtree queries
• Kết hợp với Segment Tree`,
        book: "Competitive Programming resources, Chuyên Tin Q3",
        prerequisite: "Nội dung 32, 56",
        related: "Segment Tree, Tree algorithms",
        hours: "7-8",
        note: "Nâng cao cho CP. Khó nhưng mạnh mẽ!"
    },
    {
        id: 58, chapter: 7, title: "Minimum Spanning Tree - Prim",
        detail: `• Cây khung nhỏ nhất
• Prim's algorithm
• Priority queue implementation
• Phân tích độ phức tạp
• Chứng minh tính đúng`,
        book: "CLRS Ch21, Chuyên Tin Q2",
        prerequisite: "Nội dung 14, 52",
        related: "Greedy, Heap",
        hours: "5-6",
        note: "MST bài toán kinh điển. Học cả 2 thuật toán"
    },
    {
        id: 59, chapter: 7, title: "Minimum Spanning Tree - Kruskal",
        detail: `• Kruskal's algorithm
• Union-Find usage
• So sánh với Prim
• Khi nào dùng Kruskal`,
        book: "CLRS Ch21, Chuyên Tin Q2",
        prerequisite: "Nội dung 35, 58",
        related: "Union-Find, Sorting",
        hours: "4-5",
        note: "Đơn giản hơn Prim. Cần Union-Find tốt"
    },
    {
        id: 60, chapter: 7, title: "Single-Source Shortest Paths - Bellman-Ford",
        detail: `• Relaxation
• Bellman-Ford algorithm
• Negative-weight cycles
• Phân tích độ phức tạp O(VE)`,
        book: "CLRS Ch22, Chuyên Tin Q2",
        prerequisite: "Nội dung 52, 53",
        related: "DP",
        hours: "5-6",
        note: "Xử lý được cạnh âm. Chậm nhưng tổng quát"
    },
    {
        id: 61, chapter: 7, title: "Single-Source Shortest Paths - Dijkstra",
        detail: `• Dijkstra's algorithm
• Priority queue implementation
• Yêu cầu: no negative weights
• Phân tích độ phức tạp
• Optimization với Fibonacci heap`,
        book: "CLRS Ch22, Chuyên Tin Q2",
        prerequisite: "Nội dung 14, 60",
        related: "Heap, Greedy",
        hours: "5-6",
        note: "Thuật toán shortest path phổ biến nhất. Học kỹ!"
    },
    {
        id: 62, chapter: 7, title: "Single-Source Shortest Paths - DAG",
        detail: `• Shortest paths trong DAG
• Topological sort + Relaxation
• Longest paths trong DAG
• Ứng dụng: Critical path`,
        book: "CLRS Ch22, Chuyên Tin Q2",
        prerequisite: "Nội dung 54, 60",
        related: "Topological sort",
        hours: "3-4",
        note: "Đơn giản và nhanh cho DAG. O(V+E)"
    },
    {
        id: 63, chapter: 7, title: "All-Pairs Shortest Paths - Floyd-Warshall",
        detail: `• Floyd-Warshall algorithm
• DP approach
• Transitive closure
• Detect negative cycles
• Phân tích O(V³)`,
        book: "CLRS Ch23, Chuyên Tin Q2",
        prerequisite: "Nội dung 38, 60",
        related: "DP, Matrix",
        hours: "5-6",
        note: "Tìm SP giữa mọi cặp. Code ngắn gọn, dễ nhớ"
    },
    {
        id: 64, chapter: 7, title: "All-Pairs Shortest Paths - Johnson",
        detail: `• Johnson's algorithm
• Reweighting technique
• Bellman-Ford + Dijkstra
• So sánh với Floyd-Warshall
• Phân tích O(V²log V + VE)`,
        book: "CLRS Ch23, Chuyên Tin Q3",
        prerequisite: "Nội dung 60, 61",
        related: "Bellman-Ford, Dijkstra",
        hours: "5-6",
        note: "Nhanh hơn Floyd khi đồ thị sparse. Nâng cao"
    },
    {
        id: 65, chapter: 8, title: "Maximum Flow - Ford-Fulkerson",
        detail: `• Mạng flow
• Residual graph
• Augmenting path
• Ford-Fulkerson method
• Max-flow Min-cut theorem`,
        book: "CLRS Ch24, Chuyên Tin Q3",
        prerequisite: "Nội dung 52, 53",
        related: "BFS/DFS",
        hours: "6-8",
        note: "Bài toán network flow quan trọng. Học kỹ lý thuyết"
    },
    {
        id: 66, chapter: 8, title: "Maximum Flow - Edmonds-Karp",
        detail: `• Edmonds-Karp algorithm
• BFS for augmenting path
• Phân tích O(VE²)
• So sánh các thuật toán flow`,
        book: "CLRS Ch24, Chuyên Tin Q3",
        prerequisite: "Nội dung 65",
        related: "BFS",
        hours: "4-5",
        note: "Implementation cụ thể của Ford-Fulkerson"
    },
    {
        id: 67, chapter: 8, title: "Maximum Flow - Push-Relabel",
        detail: `• Push-Relabel algorithm
• Height function
• Preflow
• Phân tích O(V²E)
• FIFO, Highest label variants`,
        book: "CLRS Ch24, Chuyên Tin Q3",
        prerequisite: "Nội dung 65",
        related: "Graph algorithms",
        hours: "6-7",
        note: "Nhanh hơn Ford-Fulkerson. Khó hơn nhưng hiệu quả"
    },
    {
        id: 68, chapter: 8, title: "Maximum Bipartite Matching",
        detail: `• Đồ thị 2 phía
• Matching problem
• Hungarian algorithm
• Reduction to max flow
• Ứng dụng: assignment problem`,
        book: "CLRS Ch24, Chuyên Tin Q3",
        prerequisite: "Nội dung 65",
        related: "Maximum flow",
        hours: "5-6",
        note: "Ứng dụng quan trọng của max flow"
    },
    {
        id: 69, chapter: 9, title: "String Matching - Naive",
        detail: `• Brute-force matching
• Sliding window
• Phân tích O(nm)
• Rabin-Karp preprocessing`,
        book: "CLRS Ch32, Chuyên Tin Q2",
        prerequisite: "Không",
        related: "String basics",
        hours: "2-3",
        note: "Thuật toán đơn giản nhất. Hiểu trước khi học nâng cao"
    },
    {
        id: 70, chapter: 9, title: "String Matching - Rabin-Karp",
        detail: `• Rolling hash
• Rabin-Karp algorithm
• Spurious hits
• Multiple pattern matching
• Phân tích average O(n+m)`,
        book: "CLRS Ch32, Chuyên Tin Q2",
        prerequisite: "Nội dung 69",
        related: "Hashing",
        hours: "4-5",
        note: "Dùng hash function thông minh. Practical algorithm"
    },
    {
        id: 71, chapter: 9, title: "String Matching - KMP",
        detail: `• Knuth-Morris-Pratt algorithm
• Failure function
• Prefix function
• Phân tích O(n+m)
• Không backtrack text`,
        book: "CLRS Ch32, Chuyên Tin Q2",
        prerequisite: "Nội dung 69",
        related: "Automata",
        hours: "5-6",
        note: "Thuật toán tối ưu. Khó hiểu nhưng rất quan trọng"
    },
    {
        id: 72, chapter: 9, title: "String Matching - Boyer-Moore (tùy chọn)",
        detail: `• Boyer-Moore algorithm
• Bad character rule
• Good suffix rule
• Phân tích best case O(n/m)`,
        book: "Chuyên Tin Q3",
        prerequisite: "Nội dung 69",
        related: "String algorithms",
        hours: "5-6",
        note: "Nhanh nhất trong thực tế. Dùng trong grep"
    },
    {
        id: 73, chapter: 9, title: "🆕 Trie nâng cao và Applications",
        detail: `• Trie (Prefix tree) implementation
• Compressed trie
• XOR Trie
• Aho-Corasick automaton
• Applications: autocomplete, spell checker
• Multiple pattern matching`,
        book: "Giải thuật P2 §9.7, 9.8, Chuyên Tin Q3, Competitive Programming",
        prerequisite: "Nội dung 25",
        related: "Tree structures, String algorithms",
        hours: "6-8",
        note: "CTDL nâng cao cho string. Học kỹ Aho-Corasick!"
    },
    {
        id: 74, chapter: 9, title: "Suffix Array và Suffix Tree (tùy chọn)",
        detail: `• Suffix tree construction
• Suffix array
• LCP array
• Applications
• Ukkonen's algorithm`,
        book: "Giải thuật P2 §9.8, Chuyên Tin Q3",
        prerequisite: "Nội dung 73",
        related: "Tree structures",
        hours: "7-8",
        note: "Rất nâng cao. Quan trọng cho string problems phức tạp"
    },
    {
        id: 75, chapter: 10, title: "Hình học - Khái niệm cơ bản",
        detail: `• Hệ tọa độ Đề-các
• Vector 2D/3D
• Tọa độ điểm
• Biến đổi tọa độ
• Mục tiêu Oclit`,
        book: "Chuyên Tin Q3 Tập 2 - CD8 §I, CLRS Ch33",
        prerequisite: "Không",
        related: "Hình học phẳng, Vector đại số",
        hours: "4-5",
        note: "Nền tảng toán học. Ôn lại kiến thức hình học THPT"
    },
    {
        id: 76, chapter: 10, title: "Hình học - Các phép toán Vector",
        detail: `• Tích vô hướng (Dot product)
• Tích chéo (Cross product)
• Độ dài vector
• Góc giữa 2 vector
• Ứng dụng trong hình học`,
        book: "Chuyên Tin Q3 Tập 2 - CD8 §I, CLRS Ch33",
        prerequisite: "Nội dung 75",
        related: "Trigonometry",
        hours: "3-4",
        note: "Công cụ cơ bản. Code các hàm cơ bản trước"
    },
    {
        id: 77, chapter: 10, title: "Hình học - Đường thẳng và Đoạn thẳng",
        detail: `• Biểu diễn đường thẳng
• Phương trình tham số
• Kiểm tra điểm nằm trên đường thẳng
• Giao điểm 2 đường thẳng
• Giao điểm 2 đoạn thẳng
• Đoạn thẳng cắt nhau`,
        book: "Chuyên Tin Q3 Tập 2 - CD8 §II, CLRS Ch33.1",
        prerequisite: "Nội dung 76",
        related: "Linear algebra",
        hours: "5-6",
        note: "Bài toán hay gặp. Code cẩn thận các trường hợp đặc biệt"
    },
    {
        id: 78, chapter: 10, title: "Hình học - Đa giác",
        detail: `• Biểu diễn đa giác
• Diện tích đa giác
• Điểm nằm trong đa giác
• Đa giác lồi (Convex polygon)
• Chu vi đa giác`,
        book: "Chuyên Tin Q3 Tập 2 - CD8 §III, CLRS Ch33",
        prerequisite: "Nội dung 77",
        related: "Cross product",
        hours: "5-6",
        note: "Dùng công thức tích chéo. Đa giác lồi quan trọng"
    },
    {
        id: 79, chapter: 10, title: "Hình học - Convex Hull",
        detail: `• Bao lồi (Convex hull)
• Graham scan
• Jarvis march
• Andrew's algorithm
• Phân tích độ phức tạp
• Ứng dụng`,
        book: "CLRS Ch33.3, Chuyên Tin Q3 Tập 2 - CD8",
        prerequisite: "Nội dung 76, 78",
        related: "Sorting, Stack",
        hours: "6-7",
        note: "Bài toán kinh điển computational geometry"
    },
    {
        id: 80, chapter: 10, title: "Hình học - Closest Pair of Points",
        detail: `• Cặp điểm gần nhất
• Brute force O(n²)
• Divide-and-conquer O(n log n)
• Line sweep
• Voronoi diagram`,
        book: "CLRS Ch33.4, Chuyên Tin Q3 Tập 2 - CD8 §III",
        prerequisite: "Nội dung 4, 75",
        related: "Divide-and-conquer",
        hours: "5-6",
        note: "Ứng dụng divide-and-conquer trong hình học"
    },
    {
        id: 81, chapter: 10, title: "🆕 Line Sweep Algorithm",
        detail: `• Sweep line technique
• Event-based processing
• Segment intersection
• Closest pair với line sweep
• Rectangle union area
• Applications`,
        book: "CLRS Ch33, Competitive Programming resources",
        prerequisite: "Nội dung 77, 80",
        related: "Sorting, Priority queue",
        hours: "6-7",
        note: "Technique CỰC QUAN TRỌNG cho geometry! Học kỹ"
    },
    {
        id: 82, chapter: 10, title: "Hình học - Tam giác và Đường tròn",
        detail: `• Diện tích tam giác
• Đường tròn ngoại tiếp, nội tiếp
• Tâm đường tròn
• Giao điểm đường tròn và đường thẳng
• Giao điểm 2 đường tròn`,
        book: "Chuyên Tin Q3 Tập 2 - CD8 §III, CLRS Ch33",
        prerequisite: "Nội dung 76, 77",
        related: "Geometry formulas",
        hours: "4-5",
        note: "Các công thức hình học thường dùng"
    },
    {
        id: 83, chapter: 10, title: "Hình học - Thư viện và Xử lý số thực",
        detail: `• Thư viện Math trong Pascal
• NaN, Infinite, NegInfinite
• Epsilon comparison
• Làm tròn an toàn
• Matrix operations
• Debugging geometric code`,
        book: "Chuyên Tin Q3 Tập 2 - CD8, CLRS Ch33",
        prerequisite: "Nội dung 75-82",
        related: "Floating point arithmetic",
        hours: "3-4",
        note: "Cực kỳ quan trọng! Số thực có sai số"
    },
    {
        id: 84, chapter: 11, title: "Lý thuyết trò chơi - Cơ bản",
        detail: `• Khái niệm trò chơi
• Trò chơi tổ hợp
• Winning/Losing positions
• Nim game
• Trò chơi 2 người tổng điểm bằng 0`,
        book: "Chuyên Tin Q3 Tập 2 - CD9, Chuyên Tin Q2",
        prerequisite: "Không",
        related: "Logic, Proof",
        hours: "5-6",
        note: "Chủ đề thú vị và khó. Cần tư duy logic tốt"
    },
    {
        id: 85, chapter: 11, title: "Lý thuyết trò chơi - Nim và biến thể",
        detail: `• Nim game cơ bản
• Nim sum (XOR)
• Bouton's theorem
• Misère Nim
• Multi-pile Nim`,
        book: "Chuyên Tin Q3 Tập 2 - CD9, Chuyên Tin Q2",
        prerequisite: "Nội dung 84",
        related: "XOR operations",
        hours: "4-5",
        note: "Nền tảng game theory. Học thuộc Nim sum"
    },
    {
        id: 86, chapter: 11, title: "Lý thuyết trò chơi - Sprague-Grundy",
        detail: `• Grundy number
• Mex function
• Sprague-Grundy theorem
• Combining games
• Ứng dụng`,
        book: "Chuyên Tin Q3 Tập 2 - CD9, Chuyên Tin Q2",
        prerequisite: "Nội dung 85",
        related: "Graph theory",
        hours: "6-7",
        note: "Nâng cao. Tổng quát hóa Nim game"
    },
    {
        id: 87, chapter: 11, title: "Lý thuyết trò chơi - Minimax",
        detail: `• Minimax algorithm
• Game tree
• Alpha-Beta pruning
• Heuristic evaluation
• Ứng dụng: Chess, Tic-tac-toe`,
        book: "Chuyên Tin Q3 Tập 2 - CD9, Chuyên Tin Q2",
        prerequisite: "Nội dung 84",
        related: "Tree, Recursion",
        hours: "5-6",
        note: "Thuật toán cho AI chơi game. Rất hay!"
    },
    {
        id: 88, chapter: 12, title: "Thuật toán di truyền - Giới thiệu",
        detail: `• Giải thuật tiến hóa
• Cấu trúc nhiễm sắc thể
• Quần thể
• Fitness function
• Selection, Crossover, Mutation`,
        book: "Chuyên Tin Q3 Tập 2 - CD10, Chuyên Tin Q3",
        prerequisite: "Nội dung 48",
        related: "Probabilistic algorithms, Optimization",
        hours: "6-8",
        note: "Meta-heuristic. Giải bài toán NP-hard"
    },
    {
        id: 89, chapter: 12, title: "Thuật toán di truyền - Cài đặt",
        detail: `• Encoding schemes
• Selection methods: Roulette, Tournament
• Crossover operators
• Mutation operators
• Termination conditions
• Parameters tuning`,
        book: "Chuyên Tin Q3 Tập 2 - CD10, Chuyên Tin Q3",
        prerequisite: "Nội dung 88",
        related: "Randomized algorithms",
        hours: "8-10",
        note: "Nhiều biến thể. Thử nghiệm nhiều để tìm best params"
    },
    {
        id: 90, chapter: 12, title: "Thuật toán tối ưu hóa kiến (ACO)",
        detail: `• Ant Colony Optimization
• Pheromone trails
• Probability transition
• Pheromone update
• Ứng dụng: TSP`,
        book: "Chuyên Tin Q3 Tập 2 - CD10 §III, Chuyên Tin Q3",
        prerequisite: "Nội dung 88",
        related: "Graph algorithms, TSP",
        hours: "6-7",
        note: "Mô phỏng hành vi kiến. Hiệu quả với TSP"
    },
    {
        id: 91, chapter: 12, title: "🆕 Randomized Algorithms nâng cao",
        detail: `• Las Vegas vs Monte Carlo algorithms
• Randomized QuickSelect
• Skip List
• Randomized data structures
• Hash functions nâng cao
• Bloom filters`,
        book: "CLRS Ch5, 11, Chuyên Tin Q3",
        prerequisite: "Nội dung 5",
        related: "Probability, Hash tables",
        hours: "6-7",
        note: "Kỹ thuật quan trọng. Đôi khi đơn giản hơn deterministic"
    },
    {
        id: 92, chapter: 12, title: "Các thuật toán meta-heuristic khác (tùy chọn)",
        detail: `• Simulated Annealing
• Particle Swarm Optimization
• Tabu Search
• Hill Climbing
• So sánh các phương pháp`,
        book: "Chuyên Tin Q3, Tài liệu bổ sung",
        prerequisite: "Nội dung 88",
        related: "Optimization theory",
        hours: "8-10",
        note: "Tùy chọn nâng cao. Nghiên cứu khi cần"
    },
    {
        id: 93, chapter: 13, title: "NP-Completeness - Lý thuyết",
        detail: `• Lớp P, NP, NP-complete, NP-hard
• Polynomial-time reduction
• Cook-Levin theorem
• SAT problem
• Ý nghĩa thực tế`,
        book: "CLRS Ch34, Chuyên Tin Q3",
        prerequisite: "Nội dung 3, 38",
        related: "Complexity theory, Logic",
        hours: "6-8",
        note: "Lý thuyết khó nhưng quan trọng. Đọc chậm"
    },
    {
        id: 94, chapter: 13, title: "NP-Complete Problems",
        detail: `• Traveling Salesman (TSP)
• Hamiltonian Cycle
• Vertex Cover
• Clique
• Graph Coloring
• Subset Sum
• Chứng minh NP-complete`,
        book: "CLRS Ch34, Chuyên Tin Q3",
        prerequisite: "Nội dung 93",
        related: "Graph theory, Reduction",
        hours: "6-8",
        note: "Học cách reduction. Quan trọng để nhận biết NP-complete"
    },
    {
        id: 95, chapter: 13, title: "Approximation Algorithms",
        detail: `• Approximation ratio
• Vertex Cover approximation
• TSP approximation
• Set Cover
• PTAS, FPTAS
• Khi nào dùng approximation`,
        book: "CLRS Ch35, Chuyên Tin Q3",
        prerequisite: "Nội dung 94",
        related: "Greedy algorithms",
        hours: "6-7",
        note: "Giải NP-hard trong thực tế. Học các techniques"
    },
    {
        id: 96, chapter: 13, title: "Number-Theoretic Algorithms (tùy chọn)",
        detail: `• GCD, LCM nâng cao
• Modular arithmetic nâng cao
• Chinese Remainder Theorem
• RSA cryptography
• Primality testing
• Factorization`,
        book: "CLRS Ch31, Chuyên Tin Q3",
        prerequisite: "Nội dung 7",
        related: "Number theory, Abstract algebra",
        hours: "8-10",
        note: "Quan trọng cho cryptography và competitive programming"
    },
    {
        id: 97, chapter: 13, title: "Matrix Operations (tùy chọn)",
        detail: `• Matrix multiplication
• Strassen's algorithm
• Matrix inversion
• LU decomposition
• Solving linear systems`,
        book: "CLRS Ch28, Chuyên Tin Q3",
        prerequisite: "Không",
        related: "Linear algebra",
        hours: "6-8",
        note: "Quan trọng cho machine learning và scientific computing"
    },
    {
        id: 98, chapter: 13, title: "FFT và Polynomials (tùy chọn)",
        detail: `• Polynomial representation
• Polynomial multiplication
• FFT algorithm
• Number-theoretic transform
• Ứng dụng: signal processing`,
        book: "CLRS Ch30, Chuyên Tin Q3",
        prerequisite: "Nội dung 97",
        related: "Complex numbers, Divide-and-conquer",
        hours: "8-10",
        note: "Nâng cao. Quan trọng cho signal processing"
    },
    {
        id: 99, chapter: 13, title: "Linear Programming (tùy chọn)",
        detail: `• Linear programming formulation
• Simplex algorithm
• Duality
• Integer programming
• Applications`,
        book: "CLRS Ch29, Chuyên Tin Q3",
        prerequisite: "Nội dung 97",
        related: "Linear algebra, Optimization",
        hours: "10-12",
        note: "Rất nâng cao. Quan trọng cho operations research"
    },
    {
        id: 100, chapter: 13, title: "Parallel Algorithms (tùy chọn)",
        detail: `• Parallel computing models
• PRAM model
• Parallel sorting
• Parallel prefix
• Matrix operations
• Synchronization`,
        book: "CLRS Ch27, Chuyên Tin Q3",
        prerequisite: "Nội dung 17",
        related: "Concurrency, Multithreading",
        hours: "8-10",
        note: "Quan trọng trong thời đại multi-core. Nâng cao"
    },
    {
        id: 101, chapter: 13, title: "Advanced Data Structures - Tổng hợp (tùy chọn)",
        detail: `• Splay Tree
• Skip List
• van Emde Boas Tree
• Persistent data structures
• Treap
• Link-Cut Tree`,
        book: "CLRS Ch19, 20, Chuyên Tin Q3, Competitive Programming resources",
        prerequisite: "Nội dung 29, 30, 31",
        related: "Tree structures",
        hours: "10-12",
        note: "Quan trọng cho competitive programming cao cấp"
    },
    {
        id: 102, chapter: 14, title: "🆕 Common Interview Patterns",
        detail: `• Top 15 patterns phổ biến
• Pattern recognition techniques
• Template code cho mỗi pattern
• Khi nào dùng pattern nào
• Practice problems cho mỗi pattern`,
        book: "LeetCode, Interview resources",
        prerequisite: "Tất cả nội dung trước",
        related: "Problem solving",
        hours: "8-10",
        note: "CỰC KỲ QUAN TRỌNG cho interviews! Học thuộc 15 patterns"
    },
    {
        id: 103, chapter: 14, title: "🆕 Problem-Solving Strategies",
        detail: `• Cách approach bài toán mới
• Debug techniques
• Time/Space optimization strategies
• Common mistakes và cách tránh
• Test case generation
• Edge cases checklist`,
        book: "Competitive Programming resources, Problem solving books",
        prerequisite: "Tất cả nội dung trước",
        related: "Tất cả",
        hours: "6-8",
        note: "Meta-skill quan trọng nhất! Học cách học"
    },
    {
        id: 104, chapter: 14, title: "🆕 Contest Strategies",
        detail: `• Time management trong contest
• Partial credit strategies
• Debugging under pressure
• Which problem to solve first
• Penalty minimization
• Mental preparation`,
        book: "Codeforces, Competitive Programming resources",
        prerequisite: "Tất cả nội dung trước",
        related: "Contest experience",
        hours: "4-5",
        note: "Kỹ năng thực chiến. Practice với real contests!"
    },
    {
        id: 105, chapter: 14, title: "Bài tập tổng hợp và Ôn tập TỔNG THỂ",
        detail: `• Review tất cả 104 nội dung
• Làm 150+ bài LeetCode Medium-Hard
• 50+ bài Codeforces Div 2
• 20+ contests
• Mock interviews
• Viết blog tổng kết
• Teaching others`,
        book: "Tất cả sách đã học, LeetCode, Codeforces, HackerRank, AtCoder",
        prerequisite: "Tất cả nội dung 1-104",
        related: "Tất cả",
        hours: "100-150",
        note: "Giai đoạn quan trọng nhất! Practice, practice, practice!"
    }
];

const algorithmChapters = [
    { id: 1, name: "Phần 1: Nền tảng & Phân tích" },
    { id: 2, name: "Phần 2: Kỹ thuật cơ bản" },
    { id: 3, name: "Phần 3: Sắp xếp & Tìm kiếm" },
    { id: 4, name: "Phần 4: CTDL cơ bản & Patterns" },
    { id: 5, name: "Phần 5: Cây & CTDL nâng cao" },
    { id: 6, name: "Phần 6: Quy hoạch động" },
    { id: 7, name: "Phần 7: Đồ thị cơ bản" },
    { id: 8, name: "Phần 8: Luồng mạng" },
    { id: 9, name: "Phần 9: Xử lý chuỗi" },
    { id: 10, name: "Phần 10: Hình học" },
    { id: 11, name: "Phần 11: Lý thuyết trò chơi" },
    { id: 12, name: "Phần 12: Thuật toán nâng cao" },
    { id: 13, name: "Phần 13: Chủ đề đặc biệt" },
    { id: 14, name: "Phần 14: Tổng hợp & Practice" }
];
