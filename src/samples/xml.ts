
export default `

<?xml version="1.0" encoding="UTF-8"?>
<table summary="Product Sales Summary" border="1">
  <!--list products-->
  <tr align="center">
    <xsl:for-each select="//product">
      <th>
        <b><xsl:value-of select="."/></b>
      </th>
    </xsl:for-each>
  </tr>
</table>

`;
