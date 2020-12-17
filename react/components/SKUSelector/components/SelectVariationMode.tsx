import React from 'react'
import { Dropdown } from 'vtex.styleguide'
import { injectIntl, defineMessages, IntlShape } from 'react-intl'
import { formatCurrency } from 'vtex.format-currency'
import { useRuntime } from 'vtex.render-runtime'

import styles from '../styles.css'
import { DisplayOption } from '../types'

interface VariationSelectModeProps {
  intl: IntlShape
  selectedItem: string | null
  displayOptions: DisplayOption[]
  displayPrices?: boolean
}

const messages = defineMessages({
  selectPlaceholder: {
    id: 'store/sku-selector.select.placeholder',
    defaultMessage: '',
  },
})

function SelectVariationMode(props: VariationSelectModeProps) {
  const { intl, selectedItem, displayOptions, displayPrices } = props
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { culture } = useRuntime()

  const options = displayOptions.map(({ label, price: value }) => {
    const price =
      displayPrices && value && selectedItem !== label
        ? ` - ${formatCurrency({ intl, culture, value })}`
        : ''

    return {
      label: `${label}${price}`,
      value: label,
    }
  })

  const handleClick = (_: React.MouseEvent, value: string) => {
    const reducedOptions = displayOptions.reduce<Record<string, DisplayOption>>(
      (acc, cur) => {
        acc[cur.label] = cur

        return acc
      },
      {}
    )

    return reducedOptions[value].onSelectItem()
  }

  return (
    <div className={styles.skuSelectorSelectContainer}>
      <Dropdown
        options={options}
        value={selectedItem}
        onChange={handleClick}
        placeholder={intl.formatMessage(messages.selectPlaceholder)}
      />
    </div>
  )
}

export default injectIntl(SelectVariationMode)
