window.onload = () => {
  const data = localStorage.getItem("schwila_behavior");
  if (!data) return;

  const behavior = JSON.parse(data);

  const { duration_seconds, scroll_position, screen_height } = behavior;
  const reflection = [];

  if (duration_seconds < 10) {
    reflection.push("ربما لم يكن مستعدًا للبقاء… لكنه حضر.");
  } else if (duration_seconds > 60) {
    reflection.push("تأمّل طويلاً… وكأن شيئًا في السكون قال له: انتظر.");
  }

  if (scroll_position < screen_height * 1.2) {
    reflection.push("لم يحاول الغوص… لكنه كان قريبًا من الحافة.");
  } else {
    reflection.push("تصفّح حتى النهاية… وكأنّه يبحث عن آخر جملة تُشبهه.");
  }

  const finalLine = `- ${new Date().toLocaleString()} ➤ ${reflection.join(" ")}`;

  // أضف السطر إلى thoughts.md (في بيئة Node أو أخبر المطوّر بنسخه يدويًا)
  console.log("📜 اقتراح الجملة:\n", finalLine);

  // تنظيف السلوك لتكون الجلسة التالية جديدة
  localStorage.removeItem("schwila_behavior");
};

