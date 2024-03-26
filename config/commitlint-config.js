module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'verify-jira-id': [2, 'always'],
    'header-max-length': [2, 'always', 200],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
  },
  plugins: [
    {
      rules: {
        'verify-jira-id': ({ subject }) => {
          const pattern = /JIRA-[0-9]{3,} -/g;
          return [
            pattern.test(subject),
            'Commit message must contain valid JIRA ID. (e.g):- chore(domain): JIRA-123 - commit message',
          ];
        },
      },
    },
  ],
};
