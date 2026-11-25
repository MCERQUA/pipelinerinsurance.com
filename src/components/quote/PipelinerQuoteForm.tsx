'use client'
import { QuoteForm, type LegacyQuestion } from '@/components/quote/QuoteForm'

const WEBHOOK_URL =
  'https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=pipelinerinsurance.com'

const PIPELINE_TRADES = [
  'Pipeline contractor',
  'Oil / gas pipeline contractor',
  'Water / sewer contractor',
  'Underground utilities contractor',
  'Other',
]

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  {
    name: 'pipeline_type',
    label: 'Pipeline type',
    type: 'select',
    options: ['Oil Pipeline', 'Gas Pipeline', 'Water / Sewer', 'Underground Utilities', 'Multi-Service', 'Other'],
  },
  { name: 'percent_subcontractors_insured', label: 'What percent of your subcontractors have insurance?', type: 'number' },
  {
    name: 'coverage_for_uninsured_subcontractors',
    label: 'Do you need coverage for uninsured subcontractors?',
    type: 'select',
    options: ['Yes', 'No'],
  },
]

const yearsBucket = (year: string): string => {
  const y = parseInt(year, 10)
  if (!y) return ''
  const n = new Date().getFullYear() - y
  if (n < 1) return 'less_than_1'
  if (n <= 2) return '1_to_2'
  if (n <= 5) return '3_to_5'
  if (n <= 10) return '6_to_10'
  return '10_plus'
}

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  first_name: d.firstName ?? '',
  last_name: d.lastName ?? '',
  business_name: d.businessName ?? '',
  years_in_business: yearsBucket(d.yearBusinessStarted ?? ''),
  annual_revenue: d.lastGrossSales ?? '',
  message: d.notes ?? '',
  street_address: d.address ?? '',
  prior_year_gross_sales: d.lastGrossSales ?? '',
  prior_year_subcontractor_expenses: d.lastSubcontractingCosts ?? '',
  prior_year_employee_count: d.lastEmployeeCount ?? '',
  prior_year_employee_payroll: d.lastEmployeePayroll ?? '',
  estimated_gross_sales: d.nextGrossEstimate ?? '',
  estimated_subcontractor_expenses: d.nextSubcontractingCosts ?? '',
  estimated_employee_count: d.nextEmployeeCount ?? '',
  estimated_employee_payroll: d.nextEmployeePayroll ?? '',
  estimated_material_costs: d.nextMaterialCosts ?? '',
  subcontractors_have_insurance: d.subsCarryInsurance ?? '',
  coverage_types: d.coverageTypes ?? '',
  year_business_started: d.yearBusinessStarted ?? '',
  business_description: d.businessDescription ?? '',
  class_code_1: d.classCode ?? '',
  class_code_2: '',
  class_code_3: '',
  class_code_4: '',
  class_code_5: '',
  residential_vs_commercial:
    d.residentialPct || d.commercialPct ? `${d.residentialPct ?? ''}% residential / ${d.commercialPct ?? ''}% commercial` : '',
  new_vs_existing_construction: d.newConstructionPct ?? '',
  largest_projects: [d.lastLargestJobAmount, d.lastLargestJobDescription].filter(Boolean).join(' - '),
  prior_carrier_name: d.currentCarrier ?? '',
  prior_policy_expiration: d.currentPolicyExpiration ?? '',
})

export default function PipelinerQuoteForm() {
  return (
    <QuoteForm
      formName="quote"
      tradeName="Pipeline Contractor"
      endpoint={WEBHOOK_URL}
      format="json"
      netlifyFallback="/__forms.html"
      extraFields={{ form_name: 'quote', source: 'pipelinerinsurance.com' }}
      options={{ yn: true, feinRequired: false }}
      tradeTypeOptions={PIPELINE_TRADES}
      defaults={{ coverageTypes: 'General Liability' }}
      legacyQuestions={LEGACY}
      deriveLegacy={deriveLegacy}
      classes={{
        input: 'w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3C17] focus:border-transparent transition-shadow',
        label: 'block text-sm font-semibold text-gray-700 mb-1.5',
        legend: 'block text-sm font-semibold text-gray-700 mb-1.5',
        heading: 'text-lg font-bold text-gray-900 border-b border-gray-200 pb-2',
        button: 'w-full sm:w-auto bg-[#7C3C17] hover:bg-orange-900 text-white font-semibold px-8 py-4 rounded-xl transition-colors disabled:opacity-60',
      }}
    />
  )
}
