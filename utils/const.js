export const SHIFT_TYPES = {
  CONSULTATION: {
    value: 'CONSULTATION',
    label: 'Consulatation'
  },
  TELEPHONE: {
    value: 'TELEPHONE',
    label: 'Telephone'
  },
  AMBULANCE: {
    value: 'AMBULANCE',
    label: 'Ambulance'
  }
}

export const SHIFT_TYPES_LIST = Object.values(SHIFT_TYPES).map((item) => {return item})

export function DEFAULT_SHIFT() {
  return {
    title: '',
    description: '',
    dates: []
  }
}

export function DEFAULT_SHIFT_DATE(date) {
  const st = new Date()
  st.setHours(8, 0, 0)
  const end = new Date()
  end.setHours(12, 0, 0)
  return {
    date,
    startTime: st,
    endTime: end,
    price: 0,
    type: ''

  }
}