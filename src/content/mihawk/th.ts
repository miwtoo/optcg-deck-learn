export const mihawkThaiNavigation = {
  deck: 'เด็ค',
  pilot: 'วิธีเล่น',
} as const;

export const mihawkThaiDeckRoleLabels = {
  Leader: 'ลีดเดอร์',
  'Search / deployment': 'ค้นหา / ลงการ์ด',
  'Search / setup': 'ค้นหา / เตรียมมือ',
  'Rest target': 'เป้าหมายสำหรับพัก',
  Character: 'ตัวละคร',
  'Wano search': 'ค้นหาวาโนะ',
  'Deployment engine': 'ตัวช่วยลงการ์ด',
  'Rest effect': 'เอฟเฟกต์เมื่อพัก',
  Finisher: 'ปิดเกม',
  'Main Event': 'อีเวนต์ Main',
  'Counter Event': 'อีเวนต์ Counter',
} as const;

export const mihawkThaiDeckGroups = {
  Leader: 'ลีดเดอร์',
  'Search / setup': 'ค้นหา / เตรียมมือ',
  Characters: 'ตัวละคร',
  'Rest effects': 'เอฟเฟกต์เมื่อพัก',
  Events: 'อีเวนต์',
} as const;

export const mihawkThaiDeck = {
  title: 'Dracule Mihawk สีเขียว · OP14-020',
  navigation: mihawkThaiNavigation,
  hero: {
    eyebrow: 'สีเขียว · Slash',
    lede: 'ใช้เอฟเฟกต์ก่อน พักการ์ด 1 ใบ แล้วทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟ',
    leaderChip: 'ลีดเดอร์ OP14-020',
    cardCount: (count: number) => `ลีดเดอร์ 1 ใบ + การ์ด ${count} ใบ`,
    leaderAlt: 'Dracule Mihawk ลีดเดอร์',
  },
  leaderSequence: {
    label: 'ลำดับเอฟเฟกต์ลีดเดอร์',
    text: 'เล่นตัวละครและใช้เอฟเฟกต์ก่อน ตรวจสอบว่าฝั่งใดฝั่งหนึ่งมีตัวละคร Cost 5 หรือมากกว่า พักการ์ดของคุณ ทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟ ห้ามลงตัวละครเพิ่ม ใช้ DON!! ที่แอ็กทีฟเพื่อโจมตี ใช้อีเวนต์ และใช้เอฟเฟกต์',
  },
  plan: {
    eyebrow: 'แผนแบบง่าย',
    title: 'ใช้การพักให้คุ้ม',
    steps: [
      { title: '1 · ใช้เอฟเฟกต์ก่อน', text: 'เล่นตัวละครและใช้เอฟเฟกต์ก่อนใช้เอฟเฟกต์ลีดเดอร์' },
      { title: '2 · ตรวจสอบสนาม', text: 'ฝั่งใดฝั่งหนึ่งต้องมีตัวละคร Cost 5 หรือมากกว่า' },
      { title: '3 · พักการ์ด 1 ใบ', text: 'พักการ์ด 1 ใบ แล้วทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟด้วยเอฟเฟกต์ลีดเดอร์' },
      { title: '4 · ใช้ DON!!', text: 'ใช้ DON!! ที่แอ็กทีฟเพื่อโจมตี ใช้อีเวนต์ และใช้เอฟเฟกต์ตัวละคร ห้ามลงตัวละครเพิ่มในเทิร์นนี้' },
    ],
    flow: ['ใช้เอฟเฟกต์', 'ตรวจสอบ Cost 5+', 'พัก', '+ DON!! แอ็กทีฟ', 'โจมตีหรือใช้อีเวนต์'],
  },
  development: {
    eyebrow: 'การพัฒนาสนาม',
    title: 'พัฒนาสนามที่ 5 หรือ 6 DON!!',
    steps: [
      { title: '5 DON!!', text: 'ลงตัวละคร Cost 5 ใบหนึ่ง เพื่อให้ลีดเดอร์มีตัวละคร Cost 5+ สำหรับเอฟเฟกต์' },
      { title: '6 DON!!', text: 'ST32-003 Dracule Mihawk ลง Perona หรือตัวละคร Attribute Slash ที่มี Cost 5 หรือน้อยกว่าจากมือได้ จากนั้นลีดเดอร์พักตัวละครใบนั้นได้' },
      { title: '9 หรือ 10 DON!!', text: 'ใช้ DON!! ที่แอ็กทีฟเพื่อลงตัวละคร Cost สูงและปิดเกม ST24-004 Law & Bepo และ OP14-119 Dracule Mihawk ใช้ปิดเกมในเด็คนี้' },
      { title: 'เก็บ Counter', text: 'วางแผนอีเวนต์ Counter ก่อนใช้ DON!! ที่แอ็กทีฟทั้งหมด ST16-004 Shanks และ ST24-004 Law & Bepo เป็นตัวละครในเด็คนี้ OP01-055 เป็นอีเวนต์ Main ไม่ใช่อีเวนต์ Counter' },
    ],
  },
  list: {
    eyebrow: 'รายการเด็ค',
    cardCount: (count: number) => `ลีดเดอร์ 1 ใบ + การ์ด ${count} ใบ`,
    counted: (count: number) => `✓ นับแล้ว: ${count}`,
    source: 'รายการนี้ใช้การ์ดและจำนวนตามไฟล์ต้นทาง Tone ครบทั้งหมด',
    groups: mihawkThaiDeckGroups,
  },
  export: {
    eyebrow: 'EGMAN EVENTS DECK BUILDER',
    title: 'คัดลอกรายการเด็ค',
    copy: 'คัดลอกรายการ',
    copied: 'คัดลอกแล้ว',
    copiedStatus: 'คัดลอกไปยังคลิปบอร์ดแล้ว',
  },
  pilotLink: {
    label: 'เปิดคู่มือวิธีเล่น →',
    text: 'ดูลำดับเอฟเฟกต์ลีดเดอร์และจุดพัฒนาสนาม',
  },
  sources: {
    eyebrow: 'แหล่งข้อมูล',
    text: 'รายการเด็คมาจากไฟล์ต้นทาง Tone ในเครื่อง หน้าการ์ดทางการใช้ตรวจสอบกติกาและการทำงานร่วมกันของการ์ด',
    officialDeckPage: 'หน้าเด็ค One Piece Card Game อย่างเป็นทางการ',
  },
} as const;

export const mihawkThaiPilot = {
  title: 'คู่มือเล่น Dracule Mihawk สีเขียว',
  navigation: mihawkThaiNavigation,
  cardAlt: (id: string) => `การ์ด ${id}`,
  hero: {
    eyebrow: 'คู่มือวิธีเล่น · สีเขียว Slash',
    title: 'เล่น Mihawk ทีละขั้นตอน',
    lede: 'เตรียมมือ พักการ์ด 1 ใบ ทำให้ DON!! แอ็กทีฟ',
    chips: ['คู่มือแบบยืดหยุ่น', 'สรุปจากข้อความการ์ด'],
    leaderAlt: 'OP14-020 Dracule Mihawk ลีดเดอร์',
  },
  disclosure: {
    title: 'คู่มือแบบยืดหยุ่น · สรุปจากข้อความการ์ด',
    text: 'ตัวเลือกของคุณเปลี่ยนตามมือและสนามได้ ใช้หน้านี้เป็นตัวเลือก ไม่ใช่กฎตายตัว',
  },
  mulligan: {
    eyebrow: 'มุลลิแกน',
    title: 'เก็บแผนที่คุณใช้ได้',
    note: 'ตัวเลือกเหล่านี้มีประโยชน์ ไม่จำเป็นต้องเลือกข้อใดข้อหนึ่งเสมอ',
    items: [
      { ids: ['OP12-034', 'OP07-022'], title: 'การ์ดเตรียมมือ', text: 'Perona และ Otama ช่วยเตรียมมือของคุณ' },
      { ids: ['OP07-026', 'ST32-003'], title: 'การพัฒนาสนาม', text: 'ตัวละคร Cost 5 หรือ ST32-003 Mihawk ช่วยให้คุณเริ่มแผนพัฒนาสนามได้' },
      { ids: ['OP14-023', 'OP14-039'], title: 'เป้าหมายสำหรับพัก', text: 'Kikunojo และ Coffin Boat เป็นการ์ดที่เหมาะสำหรับพัก' },
      { ids: ['OP14-119', 'ST24-004'], title: 'Cost สูง', text: 'การ์ด Cost 9 หรือ 10 รอได้ หากมือของคุณยังไม่มีการ์ดเตรียมมือหรือพัฒนาสนาม' },
    ],
  },
  curve: {
    eyebrow: 'ลำดับ DON!!',
    title: 'เล่นตามลำดับ DON!!',
    noteTitle: 'ตัวอย่างตัวเลือก · ไม่ใช่ลำดับที่ต้องทำ',
    note: 'เลือกแผนที่เหมาะกับมือและสนามของคุณ',
    items: [
      { don: '1–4 DON!!', ids: ['OP12-034', 'OP07-022', 'OP14-039', 'OP14-023'], title: 'เตรียมมือ', text: 'ใช้ Perona, Otama, Coffin Boat หรือ Kikunojo' },
      { don: '5 DON!!', ids: ['OP07-026', 'OP10-030', 'OP12-023', 'OP14-033', 'ST32-002'], title: 'ทำเงื่อนไขให้ครบ', text: 'ลงตัวละคร Cost 5 ฝั่งใดฝั่งหนึ่งต้องมีตัวละคร Cost 5 หรือมากกว่า' },
      { don: '6 DON!!', ids: ['ST32-003', 'OP13-031'], title: 'ลงการ์ด', text: 'ใช้ ST32-003 หรือ OP13-031 ก่อนเอฟเฟกต์ลีดเดอร์' },
      { don: '9 DON!!', ids: ['OP14-119', 'ST16-004'], title: 'Cost สูง', text: 'ใช้ OP14-119 หรือ ST16-004 Shanks K.O. ตัวละครที่พักอยู่แล้ว' },
      { don: '10 DON!!', ids: ['ST24-004'], title: 'ควบคุมสนาม', text: 'Law & Bepo พักตัวละคร แล้วทำให้ตัวละครนั้นไม่แอ็กทีฟใน Refresh Phase ถัดไป' },
    ],
  },
  sequence: {
    eyebrow: 'ลำดับเอฟเฟกต์ลีดเดอร์',
    title: 'ทำเอฟเฟกต์ล็อกตามลำดับ',
    items: [
      { ids: ['OP12-034', 'OP07-022', 'ST32-003', 'OP13-031'], title: 'ลงตัวละครก่อน', text: 'ลงตัวละครทั้งหมดและใช้เอฟเฟกต์ที่ลงตัวละครได้' },
      { ids: ['OP14-020'], title: 'ตรวจสอบสนาม', text: 'ฝั่งใดฝั่งหนึ่งต้องมีตัวละคร Cost 5 หรือมากกว่า' },
      { ids: ['OP14-023', 'OP14-039'], title: 'พักการ์ดของคุณ', text: 'พักการ์ดของคุณ 1 ใบ' },
      { ids: ['OP14-020'], title: 'ทำให้ DON!! แอ็กทีฟ', text: 'ทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟ' },
      { ids: [], title: 'ล็อกการลงตัวละคร', text: 'ห้ามลงการ์ดตัวละครเพิ่มในเทิร์นนี้' },
      { ids: ['OP01-055', 'OP12-037', 'OP13-040', 'OP14-036'], title: 'ใช้หรือเก็บ DON!!', text: 'ใช้ DON!! เฉพาะการกระทำที่ถูกต้องและไม่ใช่การลงตัวละคร หรือเก็บไว้' },
    ],
  },
  tips: {
    eyebrow: 'คำแนะนำ',
    title: 'รู้ผลจากการพักแต่ละใบ',
    targetLabel: 'เป้าหมายที่เหมาะ',
    items: [
      { id: 'OP14-023', title: 'Kikunojo', text: 'แอ็กทีฟเมื่อจบเทิร์นของคุณ' },
      { id: 'OP14-039', title: 'Coffin Boat', text: 'มีเอฟเฟกต์ทำให้ DON!! 1 ใบแอ็กทีฟเมื่อจบเทิร์น' },
      { id: 'ST32-003', title: 'ST32-003 Mihawk', text: 'เมื่อพัก จั่ว 1 ใบ แล้วทิ้ง 1 ใบ' },
      { id: 'OP14-119', title: 'OP14-119 Mihawk', text: 'เมื่อพัก ตัวละครฝ่ายตรงข้าม Cost 9 หรือน้อยกว่า 1 ใบจะพักไม่ได้จนจบ End Phase ของฝ่ายตรงข้าม' },
    ],
  },
  combos: {
    eyebrow: 'คอมโบ',
    title: 'ใช้แผนการ์ด 4 แบบนี้',
    note: 'ทำแต่ละแผนให้เสร็จก่อนใช้เอฟเฟกต์ลีดเดอร์',
    items: [
      {
        slug: 'mihawk-deploy', number: '01', title: 'ลงการ์ด แล้วคัดมือ', summary: 'ST32-003 Dracule Mihawk ลง Perona หรือตัวละครที่มี Attribute Slash และมี Cost ต่ำจากมือได้ แล้วลีดเดอร์พักการ์ดนั้นได้', cards: ['ST32-003', 'OP14-020', 'OP14-033'],
        steps: ['เล่น ST32-003 Dracule Mihawk ก่อนใช้เอฟเฟกต์ลีดเดอร์', 'ใช้เอฟเฟกต์ On Play เพื่อลง Perona หรือตัวละคร Attribute Slash ที่มี Cost 5 หรือน้อยกว่าจากมือ', 'ตรวจสอบว่าฝั่งใดฝั่งหนึ่งมีตัวละคร Cost 5 หรือมากกว่า', 'พัก ST32-003 ด้วยเอฟเฟกต์ลีดเดอร์ จั่ว 1 ใบ แล้วทิ้ง 1 ใบจากมือ'],
        prerequisites: [{ text: 'ลีดเดอร์ของคุณต้องเป็น OP14-020', cardId: 'OP14-020' }, { text: 'เงื่อนไข Cost 5 หรือมากกว่าต้องเป็นจริงเมื่อใช้เอฟเฟกต์ลีดเดอร์', cardId: null }],
        result: [{ text: 'คุณลง Perona หรือตัวละคร Attribute Slash ที่มี Cost 5 หรือน้อยกว่าได้', cardId: 'ST32-003' }, { text: 'ST32-003 ที่พักอยู่ทำให้จั่ว 1 ใบ และทิ้ง 1 ใบ', cardId: 'ST32-003' }],
        powerStates: [{ cardId: 'ST32-003', label: 'ST32-003 ที่พักอยู่', value: 'จั่ว 1 ใบ ทิ้ง 1 ใบ' }],
      },
      {
        slug: 'coffin-boat', number: '02', title: 'พัก Coffin Boat', summary: 'เล่น Coffin Boat ตั้งแต่ต้นเกม พักมันด้วยเอฟเฟกต์ลีดเดอร์ แล้วเอฟเฟกต์ท้ายเทิร์นทำให้ DON!! 1 ใบแอ็กทีฟ', cards: ['OP14-039', 'OP14-020'],
        steps: ['เล่น Coffin Boat ขณะที่ลีดเดอร์ของคุณคือ Dracule Mihawk จั่ว 1 ใบ', 'ตรวจสอบว่าฝั่งใดฝั่งหนึ่งมีตัวละคร Cost 5 หรือมากกว่า', 'พัก Coffin Boat ด้วยเอฟเฟกต์ลีดเดอร์ แล้วทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟ', 'เมื่อจบเทิร์น ทำให้ DON!! 1 ใบแอ็กทีฟด้วย Coffin Boat'],
        prerequisites: [{ text: 'Coffin Boat ต้องอยู่ในสนาม', cardId: 'OP14-039' }, { text: 'เงื่อนไข Cost 5 หรือมากกว่าต้องเป็นจริงเมื่อใช้เอฟเฟกต์ลีดเดอร์', cardId: null }],
        result: [{ text: 'Coffin Boat ทดแทนตัวเองเมื่อเล่นลงสนาม', cardId: 'OP14-039' }, { text: 'เอฟเฟกต์ท้ายเทิร์นทำให้ DON!! 1 ใบแอ็กทีฟหลังใช้เอฟเฟกต์ลีดเดอร์', cardId: 'OP14-039' }],
        powerStates: [{ cardId: 'OP14-039', label: 'เมื่อจบเทิร์นของคุณ', value: 'DON!! แอ็กทีฟ +1 ใบ' }],
      },
      {
        slug: 'kikunojo-reset', number: '03', title: 'พัก Kikunojo แล้วแอ็กทีฟอีกครั้ง', summary: 'Kikunojo เป็นเป้าหมายสำหรับพัก และจะแอ็กทีฟเมื่อจบเทิร์นของคุณ', cards: ['OP14-023', 'OP14-020'],
        steps: ['เล่น Kikunojo ก่อนใช้เอฟเฟกต์ลีดเดอร์', 'ตรวจสอบว่าฝั่งใดฝั่งหนึ่งมีตัวละคร Cost 5 หรือมากกว่า', 'พัก Kikunojo ด้วยเอฟเฟกต์ลีดเดอร์ แล้วทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟ', 'เมื่อจบเทิร์น Kikunojo จะแอ็กทีฟ'],
        prerequisites: [{ text: 'Kikunojo ต้องอยู่ในสนาม', cardId: 'OP14-023' }, { text: 'เงื่อนไข Cost 5 หรือมากกว่าต้องเป็นจริงเมื่อใช้เอฟเฟกต์ลีดเดอร์', cardId: null }],
        result: [{ text: 'เอฟเฟกต์ลีดเดอร์ทำให้ DON!! แอ็กทีฟ', cardId: 'OP14-020' }, { text: 'Kikunojo แอ็กทีฟอีกครั้งเมื่อจบเทิร์นของคุณ', cardId: 'OP14-023' }],
        powerStates: [{ cardId: 'OP14-023', label: 'เมื่อจบเทิร์นของคุณ', value: 'Kikunojo แอ็กทีฟ' }],
      },
      {
        slug: 'law-deploy', number: '04', title: 'ใช้ Law ก่อนล็อก', summary: 'ใช้ OP13-031 Trafalgar Law ก่อนเอฟเฟกต์ลีดเดอร์ ต้องทำขั้นตอนลงการ์ดแบบพักก่อน', cards: ['OP13-031', 'OP14-020', 'ST32-002'],
        steps: ['เล่น OP13-031 Trafalgar Law ก่อนใช้เอฟเฟกต์ลีดเดอร์', 'ใช้เอฟเฟกต์ On Play เพื่อนำตัวละครของคุณ 1 ใบกลับขึ้นมือ', 'ลงตัวละคร Cost 5 หรือน้อยกว่าจากมือในสภาพพัก', 'ใช้เอฟเฟกต์ลีดเดอร์หลังทำขั้นตอนลงการ์ดนี้เสร็จเท่านั้น'],
        prerequisites: [{ text: 'คุณต้องมีตัวละคร 1 ใบเพื่อนำกลับขึ้นมือ', cardId: 'OP13-031' }, { text: 'ตัวละครที่ลงแทนต้องมี Cost 5 หรือน้อยกว่า', cardId: null }, { text: 'เอฟเฟกต์ลีดเดอร์ทำให้คุณลงตัวละครไม่ได้ตลอดเทิร์นที่เหลือ', cardId: 'OP14-020' }],
        result: [{ text: 'Law แลกตัวละครของคุณ 1 ใบกับตัวละคร Cost 5 หรือน้อยกว่าที่ลงในสภาพพัก', cardId: 'OP13-031' }, { text: 'หลังจบขั้นตอนนี้ เอฟเฟกต์ลีดเดอร์ยังทำให้ DON!! สูงสุด 3 ใบแอ็กทีฟได้', cardId: 'OP14-020' }],
        powerStates: [{ cardId: 'OP13-031', label: 'Law On Play', value: 'คืน 1 ใบ ลง 1 ใบในสภาพพัก' }],
      },
    ],
  },
  defense: {
    eyebrow: 'การป้องกัน',
    title: 'แยกข้อมูล Counter ให้ชัด',
    cardIds: ['OP12-037', 'OP13-040', 'OP14-036', 'OP01-055'],
    facts: ['OP12-037 และ OP13-040 ให้ Counter +3000', 'OP14-036 ให้ Counter +4000 เมื่อคุณพักการ์ดแล้วเท่านั้น', 'OP01-055 ใช้ได้เฉพาะ Main'],
  },
  effectComparison: {
    eyebrow: 'อย่าสับสนเอฟเฟกต์เหล่านี้',
    title: 'ดูเป้าหมายให้ชัด',
    items: [
      { id: 'ST16-004', title: 'Shanks', text: 'K.O. ตัวละครที่พักอยู่แล้ว' },
      { id: 'OP14-119', title: 'OP14-119 Mihawk', text: 'ทำให้ตัวละครฝ่ายตรงข้ามพักไม่ได้' },
      { id: 'ST24-004', title: 'Law & Bepo', text: 'พักตัวละคร แล้วทำให้ตัวละครนั้นไม่แอ็กทีฟ' },
    ],
  },
  leaderFact: {
    eyebrow: 'ข้อมูลลีดเดอร์',
    text: 'เมื่อสู้กับลีดเดอร์ฝ่ายตรงข้ามที่มี Attribute Slash, OP14-020 ได้ Power +1000',
    leaderAlt: 'OP14-020 Dracule Mihawk ลีดเดอร์',
  },
} as const;
