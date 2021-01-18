export const messages = {
  accepted: ':attr deve está presente.',
  acceptedIf: ':attr deveria está presente se o campo :arg0 é :arg1.',
  acceptedNotIf: ':attr não pode está presente se o campo :arg0 é :arg1.',
  activeUrl: ':attr não é uma url válida.',
  after: ':attr deve ser uma data depois :arg0.',
  afterOrEqual: ':attr deve ser uma data depois ou igual :arg0.',
  alpha: ':attr pode conter apenas letras.',
  alphaDash: ':attr pode conter apenas letras, números, e traços.',
  alphaNum: ':attr pode conter apenas letras and números.',
  alphaNumeric: ':attr pode conter apenas letras and números.',
  array: ':attr deve ser uma lista.',
  arrayUnique: ':attr deve ser uma lista de valores únicos.',
  arrayUniqueObjects: ':attr deve ser uma lista de objetos :args únicos.',
  ascii: ':attr pode conter apenas ascii caracteres válidos.',
  base64: ':attr deve ser um base64 válido.',
  before: ':attr deve ser uma data antes de :arg0.',
  beforeOrEqual: ':attr deve ser uma data antes de ou igual a:date.',
  between: ':attr deve ser entre :arg0 e :arg1',
  boolean: ':attr deve ser boleano.',
  confirmed: ':attr confirmação não corresponde.',
  contains: ':attr deve conter :arg0.',
  creditCard: ':attr deve ser um número de cartão de crédito válido.',
  date: ':attr deve ser uma data válida.',
  dateAfter: ':attr deve ser uma data depois :arg0.',
  dateAfterToday: ':attr deve ser uma data depois :arg0 :arg1.',
  dateDaysAfterToday: ':attr deve ser uma data depois :arg0 days.',
  dateYearsAfterToday: ':attr deve ser uma data depois :arg0 years.',
  dateDaysBeforeToday: ':attr deve ser uma data antes de :arg0 days.',
  dateYearsBeforeToday: ':attr deve ser uma data antes de :arg0 years.',
  dateBefore: ':attr deve ser uma data antes de :arg0.',
  dateBeforeToday: ':attr deve ser uma data antes de :arg0 :arg1.',
  dateFormat: ':attr não corresponde ao formato :arg0.',
  datetime: ':attr deve ser um datetime(YYYY-MM-DD HH:mm:ss) válido.',
  dateiso: ':attr deve ser uma data ISO-8601 válida.',
  decimal: ':attr deve ser um valor décimal válido.',
  different: ':attr e :arg0 deve ser diferente.',
  digits: ':attr deve ser de :arg0 digitos.',
  digitsBetween: ':attr deve ser entre :arg0 e :arg1.',
  dimensions: ':attr deve atender às restrições de dimensão :args.',
  domain: ':attr deve ser um domínio válido.',
  email: ':attr deve ser um endereço de email válido.',
  equals: ':attr deve ser igual a :arg0.',
  gt: ':attr deve ser maior que :args.',
  gte: ':attr deve ser maior que ou igual a :args.',
  length: ':attr comprimento não é aceitável.',
  lt: ':attr deve ser menor que :args',
  lte: ':attr deve ser menor que ou iguals :args',
  hash: ':attr deve ser um hash :arg0 válido.',
  hex: ':attr deve ser um hexadecimal válido.',
  hexColor: ':attr deve ser uma cor hexadecimal válida.',
  in: ':attr selecionado é inválido.',
  integer: ':attr deve ser um inteiro.',
  ip: ':attr deve ser um IP válido.',
  ipv4: ':attr deve ser um IPv4 válido.',
  ipv6: ':attr deve ser um IPv6 válido.',
  iso8601: ':attr deve ser um texto ISO8601 válido.',
  json: ':attr deve ser um JSON válido.',
  latLong: ':attr deve ser separados por vírgula, lat e long sem espaços.',
  lengthBetween: ':attr tamanho deve ser entre :arg0 - :arg1.',
  macAddress: ':attr deve ser um MAC válido.',
  max: ':attr não pode ser maio que :arg0.',
  maxLength: ':attr não pode ser maio que :arg0.',
  mime: ':attr deve ser um arquivo do tipo: :args.',
  min: ':attr deve ser pelo menos :arg0.',
  minLength: ':attr não pode ser menor que :arg0.',
  mongoId: ':attr deve ser um mongo id válido.',
  notContains: ':attr não pode conter :arg0.',
  notIn: ':attr selecionado é inválido.',
  nullable: ':attr é necessário.',
  numeric: ':attr deve ser um número.',
  object: ':attr deve ser um objeto.',
  phoneNumber: ':attr deve ser um telefone válido.',
  regex: ':attr tem o formato é inválido.',
  required: ':attr é obrigatório.',
  requiredIf: ':attr é obrigatório.',
  requiredNotIf: ':attr é obrigatório.',
  requiredWith: ':attr é obrigatório.',
  requiredWithout: ':attr é obrigatório.',
  same: ':attr e :arg0 precisam ser iguais.',
  size: ':attr deve ser :arg0.',
  sometimes: ':attr é obrigatório.',
  string: ':attr deve ser um texto.',
  timezone: ':attr deve ser um timezone válido.',
  unique: ':attr já foi encontrado, deve ser único.',
  url: ':attr possui um formato inválido.',
  any: 'Pelo menos um :attr deve ser informado',
  $niceNames: {},
  $custom: {
    // customAttributeName: 'Mensagem vai aqui.',
    // 'customAttributeName.rule': 'Mensagem vai aqui.',
  },
  $default: ':attr com valor mal formado.',
};