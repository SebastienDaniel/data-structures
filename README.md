# Getting started

--------
## Classes

<dl>
<dt><a href="#Dictionary">Dictionary</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#key">key</a></dt>
<dd></dd>
</dl>

<a name="Dictionary"></a>

## Dictionary
**Kind**: global class  
**Summary**: the Dictionary stores key:value pairs of data. The keys are strings, the data can be anything.
A Dictionary is fast for create/read/update/remove actions,
as well is searching for entries that can be uniquely identified by their key  

* [Dictionary](#Dictionary)
    * [.getValues()](#Dictionary.getValues) ⇒ <code>Array</code>
    * [.getKeys()](#Dictionary.getKeys) ⇒ <code>Array</code>
    * [.get(key)](#Dictionary.get) ⇒ <code>\*</code>
    * [.set(key, value)](#Dictionary.set) ⇒ <code>[Dictionary](#Dictionary)</code>
    * [.remove(key)](#Dictionary.remove) ⇒ <code>[Dictionary](#Dictionary)</code>
    * [.hasKey(key)](#Dictionary.hasKey) ⇒ <code>boolean</code>
    * [.hasValue(value)](#Dictionary.hasValue) ⇒ <code>boolean</code>
    * [.forEach(cb)](#Dictionary.forEach) ⇒ <code>[Dictionary](#Dictionary)</code>
    * [.clear()](#Dictionary.clear) ⇒ <code>[Dictionary](#Dictionary)</code>
    * [.isEmpty()](#Dictionary.isEmpty) ⇒ <code>boolean</code>

<a name="Dictionary.getValues"></a>

### Dictionary.getValues() ⇒ <code>Array</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: returns an array of the values contained in the Dictionary  
<a name="Dictionary.getKeys"></a>

### Dictionary.getKeys() ⇒ <code>Array</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: return an array of all existing keys in the dictionary  
<a name="Dictionary.get"></a>

### Dictionary.get(key) ⇒ <code>\*</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: returns the stored value, identified by its key, otherwise undefined  

| Param | Type |
| --- | --- |
| key | <code>[key](#key)</code> | 

<a name="Dictionary.set"></a>

### Dictionary.set(key, value) ⇒ <code>[Dictionary](#Dictionary)</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>[key](#key)</code> |  |
| value | <code>\*</code> | value to bind to the key |

<a name="Dictionary.remove"></a>

### Dictionary.remove(key) ⇒ <code>[Dictionary](#Dictionary)</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: deletes the key:value pair from the Dictionary's data, if present.  

| Param | Type |
| --- | --- |
| key | <code>[key](#key)</code> | 

<a name="Dictionary.hasKey"></a>

### Dictionary.hasKey(key) ⇒ <code>boolean</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: tests if the given key exists in the Dictionary  

| Param | Type |
| --- | --- |
| key | <code>[key](#key)</code> | 

<a name="Dictionary.hasValue"></a>

### Dictionary.hasValue(value) ⇒ <code>boolean</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: searches the entire dictionary until the value is found (strict equality)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to find |

<a name="Dictionary.forEach"></a>

### Dictionary.forEach(cb) ⇒ <code>[Dictionary](#Dictionary)</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: passes each pair in the dictionary through the provided callback function.
The callback is called with four arguments (key, value, index, array),
where array is the array-representation of the Dictionary's data  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | callback |

<a name="Dictionary.clear"></a>

### Dictionary.clear() ⇒ <code>[Dictionary](#Dictionary)</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: removes all pairs in the dictionary. This is a fairly slow operation, use with caution.  
<a name="Dictionary.isEmpty"></a>

### Dictionary.isEmpty() ⇒ <code>boolean</code>
**Kind**: static method of <code>[Dictionary](#Dictionary)</code>  
**Summary**: tests if the dictionary contains any keys  
<a name="key"></a>

## key
**Kind**: global typedef  
**Summary**: used to uniquely identify an entry. All keys are coerced into strings.  
