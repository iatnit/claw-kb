const fs = require('fs');
let html = fs.readFileSync('/tmp/claw-kb/index.html', 'utf8');

const card = `
    <a class="card" href="vibe-coding-best-practices.html">
      <div class="title">🚀 Vibe Coding (AI 辅助编程) 的 5 个最佳实践</div>
      <div class="desc">每天高强度 AI 编程的复盘：先写文档再动手、结构先行、抽象重复工作、高频 Git 提交以及写 Plan 优于写代码。</div>
      <div class="meta">
        <span class="tag">方法论</span>
        <span class="tag">AI编程</span>
        <span>2026-04-03</span>
      </div>
    </a>
`;

html = html.replace(
  '<div class="category-title">📖 学习 & 成长</div>',
  '<div class="category-title">📖 学习 & 成长</div>' + card
);

fs.writeFileSync('/tmp/claw-kb/index.html', html);
