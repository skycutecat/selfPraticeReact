# Les 學習筆記

### level06:
1. 將元件模組化時, import component 的順序要正確. 
   ie. basic component要先 import
2. props的參數傳遞  parent component <=> child component 的方法
   - parent 設定attribute. chile 利用 this.pros 取得
     ps. 一定要在render() 取,否則會有error
   - 本章節需要特別注意的參數傳遞方式Object spread properties, 這是一種快速打包複製的概念.
           let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
           x; // 1
           y; // 2
           z; // { a: 3, b: 4 }

### level07:
主要學習設定 props的防呆(validate) 以及給予預設值.
- TodoHeader.propTypes
- TodoHeader.defaultProps

## level08:
每個子元件都必須給予唯一的 key，React 根據 key 來辨認元件是屬於哪一筆資料，而確保：
- 資料重新排序時，元件會跟著重新排序，而不是破壞舊元件，以新元件顯示資料
- 資料被刪除時，元件會跟著刪除，而不是留給其他資料使用