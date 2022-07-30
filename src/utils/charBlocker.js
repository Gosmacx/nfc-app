export default function charBlocker(word) {
    const conditions = ["İ", "ı", "ö", "Ö", "ş", "Ş", "ç", "Ç", "ğ", "Ğ" ];
    return conditions.some(i => word.includes(i))
}
