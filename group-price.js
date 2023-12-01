const regex =
  /((?:AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BRL|BSD|BTN|BWP|BYR|BZD|CAD|CDF|CHF|CLP|CNY|COP|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LTL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRO|MUR|MWK|MXN|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|SSP|STD|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|UYU|UZS|VEF|VND|VUV|WST|XAF|XCD|XOF|XPF|YER|ZAR|ZMW)|(?:원|RMB|руб|руб\.|Lt|ر\.ق\.‏|р\.|د\.ب\.‏|TSh|din\.|Rp|ر|WS\$|Rs|T\$|S\/\.|SR|Bs\.|NOK|CF|Fdj|£|¤|¥|SEK|Br|Bs|MTn|د\.أ\.‏|ден|den|RUB|أ\.م\.‏|лв\.|नेरू|DA|zł|Nfk|дин|дин\.|din|din\.|ر\.ي\.‏|US\$|Ksh|د\.ت\.‏|CFA|DT|MAD|B\/\.|NT\$|FCFA|soʻm|UM|Db|CVE|man\.|EC\$|PLN|රු\.|ر\.س\.‏|ج\.م\.‏|ر\.ع\.‏|￥|CA\$|ALL|Kč|د\.إ\.‏|դր\.|៛|د\.ك\.‏|ل\.ل\.‏|Afl\.|сом|LEI|kn|kr|kr\.|KM|Ft\.|VT|FC|ف\.ج\.ق\.‏|Fr\.|SFr\.|FCFP|m\.|ریال|FG|ج\.س\.|د\.ج\.‏|КМ|R\$|Lekë|৳|د\.ل\.‏|ل\.س\.‏|Nu\.|ман\.|₡|฿|₦|₩|ብር|₪|₫|€|₭|₮|₱|\$|S\$|₲|GEL|TRY|₴|₸|₹|₺|₽|Kz|LS|RF|MOP\$|GH₵|D|E|د\.ع\.‏|FBu|G|د\.م\.‏|Ft|K|RM|L|USh|P|Q|Le|R|S|Rs\.|NAf\.|DKK|؋|Ar|C\$|MK))[ ]?((?:[0-9]{1,3}[ \.,]?)*[ \.,]?[0-9]+)/g;

const groupPrice = (str) => {
  const returnArray = [];
  let arr = str.match(regex);
  if (arr === null) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    // let middleman = [];
    middleman.push(arr[i]);
    middleman.push(arr[i].match(/[0-9]+/g)[0]);
    middleman.push(arr[i].match(/[0-9]+/g)[1]);
    // middleman.push(arr[i][2].split('.')[1]);
    returnArray.push(middleman);
  }
  return returnArray;
  //   for (let i = 0; i < input.length; i++) {

  //     if (input[i] !== null) {
  //       console.log(regex);
  //     }
  //   }
  //   console.log(str);
};

// console.log(groupPrice('this, 0.32, is not a match'));
// console.log(groupPrice('USD12.31ASD AUD33.33'));
// console.log(groupPrice('The price of the cereals is $4.00.'));

// [['$4.00', '4', '00']];
// [['USD12.31', '12', '31']];
