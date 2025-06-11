const domainColors = {
  arcana: '#664295',
  blade: '#b93035',
  bone: '#c1c7cc',
  codex: '#3370ab',
  grace: '#cb3b90',
  midnight: '#2c2c2c',
  sage: '#0e854d',
  splendor: '#d1b447',
  valor: '#dc7a27',
};

export const domainColor = (domain?: string) => {
  return domain ? domainColors[domain as keyof typeof domainColors] : '#fff';
};
