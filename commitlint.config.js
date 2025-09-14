export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档变更
        'style', // 代码格式（不影响功能）
        'refactor', // 重构（既不是新功能也不是修复 bug）
        'test', // 测试相关
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'perf', // 性能优化
      ],
    ],
    'subject-case': [0], // 不限制 subject 的大小写
  },
}
