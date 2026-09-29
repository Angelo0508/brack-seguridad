export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  highlight: string;
  image?: string;
}

export interface WhatsAppCase {
  id: string;
  title: string;
  sector: string;
  date: string;
  situation: string;
  actionTaken: string;
  outcome: string;
  chatSnippet: {
    sender: string;
    text: string;
    time: string;
    isOperator?: boolean;
    isAuthority?: boolean;
  }[];
}

export interface ClientReview {
  id: string;
  client: string;
  buildingOrRole: string;
  comment: string;
  highlight: string;
}

export const BRACK_DATA = {
  company: 'BRACKSEGURIDAD S.A.S',
  brandName: 'BRACK Seguridad',
  tagline: 'Seguridad Inteligente',
  phone: '099 715 5768',
  phoneInternational: '+593997155768',
  instagram: '@brackseguridad',
  leadership: {
    ceo: 'Esteban Ramos',
    title: 'Asesor en Inteligencia Operativa Policial y Seguridad Ciudadana',
    experience: 'Más de 10 años vinculados a la seguridad de vanguardia en el Ecuador',
  },
  locations: {
    office: 'De Las Palmeras y Av. Eloy Alfaro, Quito',
    civ: 'Av. Isidro Ayora y Alonso Jerez (Centro Integral de Vigilancia)',
  },
  metrics: [
    { value: '-40%', label: 'Ahorro promedio', sub: 'frente a guardia física tradicional' },
    { value: '24/7', label: 'Supervisión continua', sub: 'desde Centro Integral de Vigilancia' },
    { value: '< 15s', label: 'Tiempo de respuesta', sub: 'en disuasión inmediata por perifoneo' },
    { value: '10+ Años', label: 'Trayectoria técnica', sub: 'protegiendo al Ecuador' },
  ],
  trustedClients: [
    { name: 'Alem', sector: 'Corporativo & Salud' },
    { name: 'Buggatti', sector: 'Retail & Moda' },
    { name: 'Kumon House', sector: 'Educación & Servicios' },
    { name: 'Deportiva Cumbayá', sector: 'Complejos Deportivos' },
    { name: 'Liquors & Vapes', sector: 'Comercio Especializado' },
    { name: 'Ichthion Guardianes', sector: 'Conservación Marina & Tecnología' },
    { name: 'MedVet', sector: 'Clínica Veterinaria Especializada' },
    { name: 'U.E. Thomas Jefferson', sector: 'Institución Educativa' },
    { name: 'Solucimec', sector: 'Ingeniería Automotriz & Talleres' },
    { name: 'Edificio Kyria', sector: 'Residencial Multifamiliar' },
    { name: 'Edificio Dávalos', sector: 'Conjunto Residencial' },
  ],
  services: [
    {
      id: 'guardia-virtual',
      title: 'Guardia Virtual 24/7',
      category: 'Servicio Principal',
      summary: 'Seguridad activa remota que observa, analiza y actúa. Una alternativa moderna y mucho más efectiva que un guardia físico en sitio.',
      highlight: 'Disuasión por voz en tiempo real con perifoneo de alta potencia',
      details: [
        'Supervisión continua desde nuestro Centro Integral de Vigilancia (CIV).',
        'Cero riesgo de vulnerabilidad, sobornos o amenazas al personal en sitio.',
        'Operadores capacitados en protocolos tácticos policiales.',
        'Coordinación directa inmediata con UPC / ECU-911.',
      ],
    },
    {
      id: 'control-accesos',
      title: 'Control de Accesos',
      category: 'Acceso Remoto',
      summary: 'Recepción remota para edificios, urbanizaciones y complejos. Control eficiente de accesos peatonales y vehiculares para complejos, urbanizaciones y propiedades.',
      highlight: 'Apertura remota supervisada sin necesidad de portero físico',
      details: [
        'Atención de llamadas desde puntos de acceso e interfonos.',
        'Verificación de autorizaciones con propietarios o administradores.',
        'Gestión de accesos vehiculares y peatonales.',
        'Registro digital detallado de cada ingreso y egreso.',
      ],
    },
    {
      id: 'cctv-ia',
      title: 'CCTV & Analítica con Inteligencia Artificial',
      category: 'Sistemas Electrónicos',
      summary: 'Diseño e instalación de circuitos cerrados profesionales con analítica avanzada para detección oportuna de amenazas.',
      highlight: 'Detección automática de personas, vehículos y cruces de línea',
      details: [
        'Cámaras IP de alta resolución, visión nocturna infrarroja y PTZ 360°.',
        'Filtro de falsas alarmas (distingue animales, viento u objetos).',
        'Reconocimiento facial y lectura de placas vehiculares (LPR).',
        'Grabación local y en la nube con respaldo redundante.',
      ],
    },
    {
      id: 'alarmas-perimetral',
      title: 'Alarmas & Cercado Eléctrico',
      category: 'Protección Perimetral',
      summary: 'Diseño de anillos de seguridad para proteger tus propiedades.',
      highlight: 'Barrera física + detección + sirenas + respuesta inmediata',
      details: [
        'Cercos eléctricos homologados de alta seguridad con sensores de corte.',
        'Detectores volumétricos, fotocélulas infrarrojas y contactos magnéticos.',
        'Botones de pánico inalámbricos para residentes y empleados.',
        'Sirenas estroboscópicas de alto impacto acústico.',
      ],
    },
    {
      id: 'redes-infraestructura',
      title: 'Redes, Enlaces y Telecomunicaciones',
      category: 'Infraestructura',
      summary: 'Una cámara puede ser excelente, pero si la red falla, la seguridad se apaga. Diseñamos proyectos para mejorar tu infraestructura tecnológica.',
      highlight: 'Conectividad blindada para garantizar monitoreo 24/7 sin caídas',
      details: [
        'Cableado estructurado y fibra óptica certificada.',
        'Enlaces inalámbricos punto a punto de larga distancia.',
        'Switches PoE administrables y respaldo eléctrico ininterrumpido (UPS).',
        'Segmentación VLAN exclusiva para aislamiento de seguridad.',
      ],
    },
    {
      id: 'mantenimiento-diagnostico',
      title: 'Diagnóstico & Mantenimiento Especializado',
      category: 'Soporte Técnico',
      summary: '¿Tus equipos fallan, se desconectan o tienes falsas alarmas constantes? Realizamos revisiones preventivas y correctivas de todos tus equipos.',
      highlight: 'Mantenimiento preventivo y correctivo de sistemas existentes',
      details: [
        'Evaluación integral de equipos existentes (cámaras, DVR/NVR, cableado).',
        'Reparación, reconfiguración y actualización de firmware.',
        'Soporte técnico especializado para administración de edificios.',
        'Planes mensuales de calibración y limpieza de ópticas.',
      ],
    },
  ],
  whatsappCases: [
    {
      id: 'caso-1',
      title: 'Intento de asalto a vehículo frustrado',
      sector: 'Sector El Bosque (Calle Marino Andrade y José de Villa)',
      date: '2:28 a. m.',
      situation: 'Sujetos no identificados intentaron forzar la cerradura de un automóvil estacionado en la vía pública frente al condominio.',
      actionTaken: 'El operador CIV detectó la conducta anómala en pantalla, activó el perifoneo disuasivo advirtiendo presencia policial inmediata y notificó la novedad en el canal directo de respuesta.',
      outcome: 'Los sospechosos huyeron precipitadamente a bordo de un Chevrolet con placa PCQ-4327. Patrullero policial despachado en 5 minutos sin novedades que lamentar.',
      chatSnippet: [
        { sender: 'Operador BRACK', text: 'Muy buenas noches, por favor una ronda por la calle Marino Andrade y José de Villa, intentaron robar un vehículo.', time: '2:28 a. m.', isOperator: true },
        { sender: 'Operador BRACK', text: '[Evidencia de cámara enviada: Captura en tiempo real]', time: '2:30 a. m.', isOperator: true },
        { sender: 'Operador BRACK', text: 'Que me ayuden con una ronda lo más pronto posible por favor.', time: '2:31 a. m.', isOperator: true },
        { sender: 'Central Policial', text: 'Se coordina la Unidad policial.', time: '2:33 a. m.', isAuthority: true },
        { sender: 'Operador BRACK', text: 'Es un carro sospechoso Chevrolet con placa PCQ-4327.', time: '2:37 a. m.', isOperator: true },
      ],
    },
    {
      id: 'caso-2',
      title: 'Sospechosos en motocicleta en perímetro residencial',
      sector: 'Sector Kennedy 5 (Calle De los Cipreses)',
      date: '2:09 a. m.',
      situation: 'Dos individuos sospechosos a bordo de motocicleta merodeaban lentamente frente a los accesos peatonales durante la madrugada.',
      actionTaken: 'Seguimiento por cámara PTZ con zoom focal. Emisión de alerta por altavoz disuasivo. Coordinación instantánea con el Subteniente del sector.',
      outcome: 'Dispersión total de los sospechosos tras advertencia por parlantes. Patrulla arribó a las 2:11 a. m. asegurando el perímetro.',
      chatSnippet: [
        { sender: 'Operador BRACK', text: 'Buena noche srs de la policía. Estas personas se encuentran en la calle De los Cipreses hace algunos minutos. Su ayuda con una ronda por favor.', time: '2:09 a. m.', isOperator: true },
        { sender: 'Subteniente Crsl', text: 'Buenas noches, se coordina la unidad 🚓', time: '2:10 a. m.', isAuthority: true },
        { sender: 'Subteniente Crsl', text: 'Avanzando la unidad al punto.', time: '2:11 a. m.', isAuthority: true },
      ],
    },
    {
      id: 'caso-3',
      title: 'Emergencia y alteración del orden público',
      sector: 'Sector Magdalena 30 (Mariano Reyes y Francisco Gómez)',
      date: '10:22 p. m.',
      situation: 'Grupo no residente consumiendo licor e intentando vulnerar la puerta de ingreso a un predio privado.',
      actionTaken: 'Voz disuasiva remota advirtiendo grabación y envío de patrulla. Enlace con la red de apoyo policial comunitaria.',
      outcome: 'Presencia policial en 3 minutos. Retiro voluntario pacífico y registro de novedades para el comité del edificio.',
      chatSnippet: [
        { sender: 'Operador BRACK', text: 'Srs policías una unidad urgente en Mariano Reyes y Francisco Gómez. Su ayuda urgente.', time: '10:23 p. m.', isOperator: true },
        { sender: 'Central Policía', text: 'Se coordina la unidad. Buenas noches.', time: '10:25 p. m.', isAuthority: true },
        { sender: 'Operador BRACK', text: 'Gracias. Ya llegaron al punto.', time: '10:26 p. m.', isOperator: true },
      ],
    },
  ],
  testimonials: [
    {
      id: 't-1',
      client: 'Omar - Coordinación Edificio Kyria',
      buildingOrRole: 'Administración de Edificios',
      comment: 'Sabe que me sorprende muchísimo sus tiempos de respuesta. Literalmente están 24/7. Me asombra lo rápido que responden y los mensajes que mandan. Primera vez en mi vida que veo un monitoreo tan bueno.',
      highlight: 'Primera vez en mi vida que veo un monitoreo tan bueno',
    },
    {
      id: 't-2',
      client: 'María Cecilia & Dra. Aliz Borja',
      buildingOrRole: 'Presidenta Edificio Dávalos',
      comment: 'Muy buenos días, gracias por estar vigilantes siempre e informarnos de madrugada. Una respuesta oportuna y nos sentimos verdaderamente protegidos en todo momento.',
      highlight: 'Gracias por estar vigilantes siempre e informarnos de madrugada',
    },
    {
      id: 't-3',
      client: 'Comité de Copropietarios',
      buildingOrRole: 'Conjunto Residencial Cumbayá',
      comment: 'Reemplazar el guardia físico por la Guardia Virtual de Brack nos redujo el presupuesto de seguridad un 40% mensual y ahora sí tenemos ojos en todos los rincones sin personal vulnerable.',
      highlight: 'Reducción del 40% de costos con mayor control y cero vulnerabilidad',
    },
  ],
};
