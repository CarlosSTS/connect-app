function maskPhone(value: string) {
  value = value.replace(/\D/g, "");
  // (11) 1111-1111
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

export { maskPhone };
