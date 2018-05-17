import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import find from 'lodash/find'
import Button from '@vtex/styleguide/lib/Button'
import { injectIntl, intlShape } from 'react-intl'

import addToCartMutation from './mutations/addToCartMutation.gql'
import orderFormQuery from './queries/orderFormQuery.gql'

const EVENT_SUCCESS = 'item:add'
const EVENT_ERROR = 'message:error'

/**
 * BuyButton Component. Adds a list of items to the cart.
 */
export class BuyButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  static defaultProps = {
    quantity: 1,
    seller: 1,
  }

  translateMessage = id => this.props.intl.formatMessage({ id: id })

  toastMessage = (success, err) => {
    const event = new Event(success ? EVENT_SUCCESS : EVENT_ERROR)
    event.detail = {
      success,
      message: success ? '' : this.translateMessage('buybutton.add-failure'),
      err,
    }
    document.dispatchEvent(event)
  }

  handleAddToCart = () => {
    this.setState({ isLoading: true })
    const { addToCart, quantity, seller, skuId, getOrderForm } = this.props
    const orderFormId =
      getOrderForm.error || getOrderForm.loading
        ? ''
        : getOrderForm.orderForm.orderFormId

    addToCart({
      variables: {
        orderFormId,
        items: [
          {
            id: parseInt(skuId),
            index: 1,
            quantity,
            seller,
          },
        ],
      },
    }).then(
      res => {
        const { items } = res.data.addItem
        this.toastMessage(find(items, { id: skuId }))
        this.setState({ isLoading: false })
      },
      err => {
        this.toastMessage(false, err)
        this.setState({ isLoading: false })
      }
    )
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        {isLoading ? (
          <Button disabled isLoading={isLoading}>
            {this.props.children}
          </Button>
        ) : (
          <Button primary onClick={this.handleAddToCart}>
            {this.props.children}
          </Button>
        )}
      </div>
    )
  }
}

BuyButton.propTypes = {
  /** Message that will be displayed inside of the button **/
  children: PropTypes.PropTypes.node.isRequired,
  /** The quantity of products to be added to the cart */
  quantity: PropTypes.number,
  /** The specification of which product will be added to the cart */
  skuId: PropTypes.string.isRequired,
  /** Which seller is being referenced by the button */
  seller: PropTypes.number,
  /** Graphql call to retrieve orderFormId */
  getOrderForm: PropTypes.shape({
    error: PropTypes.object,
    orderForm: PropTypes.shape({
      orderFormId: PropTypes.string,
    }),
    loading: PropTypes.bool,
  }),
  /** Graphql property to call a mutation */
  addToCart: PropTypes.func.isRequired,
  /* Internationalization */
  intl: intlShape.isRequired,
}

export default injectIntl(
  compose(
    graphql(orderFormQuery, {
      name: 'getOrderForm',
      options: { ssr: false },
    }),
    graphql(addToCartMutation, {
      name: 'addToCart',
    })
  )(BuyButton)
)
